//globals to hold the network data used by Vis.js
var nodes =  null;
var edges = null;
var data = null;
var network = null;


//attributes to tell vis.js how to draw the graph
const REGULAR_NODE_SIZE = 18;
const LARGE_NODE_SIZE = 28;
const NODE_SPACING = 130;
const TREE_SPACING = 10;
const LEVEL_SEPARATION = 130;
const SORT_METHOD = "directed";
const DIRECTION = "DU";
const REGULAR_EDGE_WIDTH = 1;
const LARGE_EDGE_WIDTH = 4;

//color for edges in the graph
const EDGE_COLOR = "grey";

//COLOR for a course that is a prereq, but outside the selected major
const NON_COURSE_PREREQ_COLOR = "C0C0C0"
const NON_COURSE_PREREQ_HIGHLIGHT_COLOR = "E4E4E4"

//COLOR of primary nodes in the graph
const NODE_COLOR = "F3A8F3";
const NODE_HIGHLIGHT_COLOR = "FFC9FF";

//colors to decorate the links to optional prerequisites
const DASHES_COLOR = ["blue", "green", "red", "black", "purple"];


//the entry point for the program
window.addEventListener("load", async function(){
    await _initailize();
    await _buildMajorsDropdown();
    await buildNetwork(_getDropdownSelection("courseSelection"));
});


//adds dropdown event listeners and stuff
function _initailize(){
  var layoutDrop = document.getElementById("networkLayout");
  layoutDrop.addEventListener("change", function(e){
     buildNetwork(_getDropdownSelection("courseSelection"));
  });


  var showMajors = document.getElementsByClassName("showNonMajorRadios");
  for (var i = 0; i < showMajors.length; i++) {
    showMajors[i].addEventListener('change', function(e){
     buildNetwork(_getDropdownSelection("courseSelection"));
    });
}
}


function _buildMajorsDropdown(){
     let domRef = document.getElementById("courseSelection");
     for(var key in Majors){
       let major =  Majors[key];
       let op = document.createElement("option");
       op.value = major.id;
       op.innerText = major.title,
       domRef.appendChild(op);
     }

     domRef.addEventListener("change", function(e){

         var curMajor = domRef.options[domRef.selectedIndex].value;
         buildNetwork(_getDropdownSelection("courseSelection"));
     })
}


//we want these sorted so we can group by level if user selects that layout option
function _sortMyLevelAndMajor(major){
  console.log(major)
  major.courses.sort(function(a, b) {
    var textA = _getPostfix(a);
    var textB = _getPostfix(b);
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});
  for(var key in major.courses){
    let courseId = major.courses[key];
    let course = Courses[courseId]
    course.level = _getPostfix(courseId);

  }
  console.log(major)
}

//TODO: need to be able to optionally show prerequisits not in the major
function buildNetwork(majorId){
   //add all of the nodes
   nodes = new vis.DataSet();
   let major = Majors[majorId];
   console.log(major)
   for(key in major.courses){
     console.log(key)
     let courseId = major.courses[key];
     let course = Courses[courseId]
     console.log(course)
     let node = {
       id: courseId,
       label:courseId,
       title:course.title,
       color: "#" + NODE_COLOR,
       regularColor: "#" + NODE_COLOR,
       highlightColor: "#" + NODE_HIGHLIGHT_COLOR,
       font:{size:REGULAR_NODE_SIZE},
       description:course.description,
       prereqs:course.prereqs
     }
     console.log(node)
     nodes.add(node);
   }
    console.log("added main nodes")
   //add all the edges (prereqs for each course in the selected major)
    let dashColorIndex = 0;
    edges = new vis.DataSet();
    for(key in major.courses){
     let courseId = major.courses[key]
     let curCourse=  Courses[courseId]


     //get all prereqs for that course in the current major
     let edgeColor = EDGE_COLOR;
     for(var p in curCourse.prereqs){
           let prereqSet = curCourse.prereqs[p];
           //if this item has more than one prereq, then they are a list of optional ones
           let isOptional = false;
           edgeColor = EDGE_COLOR;
           if(prereqSet.length > 1){
             edgeColor =  DASHES_COLOR[dashColorIndex++];
             if(dashColorIndex == DASHES_COLOR.length) dashColorIndex = 0;
             isOptional = true;
           }

           //if the prereq is not in the network, then add it
           for(var key in prereqSet){
             let prereq = prereqSet[key];
             let isPrereqInNetwork = false;
             nodes.forEach(function(n){
               if(n.id == prereq){
                 isPrereqInNetwork = true;
               }
             });
             if(!isPrereqInNetwork && _showNonMajors()){
               let prereqCourse = Courses[prereq];
               if(prereqCourse == undefined) console.error("The prereq " + prereq + "was not defined in the list of courses");
                nodes.add({
                  id:prereq,
                  label:prereq,
                  title:prereqCourse.title,
                  color: "#" + NON_COURSE_PREREQ_COLOR,
                  regularColor: "#" + NON_COURSE_PREREQ_COLOR,
                  highlightColor: "#" + NON_COURSE_PREREQ_HIGHLIGHT_COLOR,
                  font:{size:REGULAR_NODE_SIZE}});
             }

             //add a connection edge to the prereq. Edge will be dashed if an optional prereq
             let newEdge = {
               from: courseId,
               to: prereq,
               dashes:isOptional,
               chosen:false, //want to control what happens to edges when a node is selected
               width:REGULAR_EDGE_WIDTH,
               color: {
                 color: edgeColor,
               },
             }
             edges.add(newEdge)
           }
     }
   }

   // create a network
   var container = document.getElementById('mynetwork');

   if(_getDropdownSelection("networkLayout") == "level"){
      _sortNodesByLevel();
      _computeCustomLayout();
   }

   data = {
       nodes: nodes,
       edges: edges
   };

   var curLayout = {};

   //this option only gets set if user choses the hierarchical layout option
   if(_getDropdownSelection("networkLayout") == "hierarchical"){
     curLayout = {
       hierarchical: {
         sortMethod:  SORT_METHOD,
         nodeSpacing: NODE_SPACING,
       //  treeSpacing: TREE_SPACING,
     //    levelSeparation: LEVEL_SEPARATION,
     //    direction: DIRECTION,
       },
     }
   }

   //create the vis graph options based on the user's selected settings
   var options = {
        layout: curLayout,
        edges: {
          smooth: true,
          arrows: { to: true }
        },

        physics:{
           enabled: false, //don't want this looking like jello
        },
        interaction:{hover:true}
      };

   network = new vis.Network(container, data, options);
   _addNetworkEventListeners();
   }


//sorts the global nodes object by class level
function _sortNodesByLevel(){
   let nodesToSort = []
   nodes.forEach(function(n){
        let node = {id:n.id, title:n.title, description:n.description, major:_getPrefix(n.id), rank:_getPostfix(n.id)}
        nodesToSort.push(node)
   });

   nodesToSort.sort(function(a, b) {
     return (a.rank < b.rank) ? -1 : (a.rank > b.rank) ? 1 : 0;
   });

   //count up by 100's for each row;
   let curLevel = 200;
   let x = 0;
   let y = 0;
   let dx = 150;
   let dy = 150;
   nodesToSort.forEach(function(n){

        if(n.rank >= curLevel){
          y += dy;
          x = 0;
          curLevel += 100;
        }

        n.x = x;
        n.y = y;
        x += dx;
   });

   nodesToSort.forEach(function(n){
      nodes.update({id:n.id, x:n.x, y:n.y})
   });
}


//computes the x,y coords for the network layout
function _computeCustomLayout(){

}


//returns the selected value of the dropdown with the given id
function _getDropdownSelection(elementId){
     let domRef = document.getElementById(elementId);
     return domRef.options[domRef.selectedIndex].value;
}


//looks at the showNonMajorRadios checkbox to see if non Major courses should show in the network
function _showNonMajors(){
  return document.getElementById("showNonMajorRadiosYes").checked;

}


//a helper function that manages event handlers for the network
function _addNetworkEventListeners(){
  //isn't aways called because edges get in the way. Need to find a workaround if we want to user this
  network.on("hoverNode", function(e){

  });

  network.on("hoverEdge", function(e){

  })

  //called when the user clickes on the network. We currently ignore clicks that are not on nodes.
  network.on("click", function(e){

    //ignore clicks not on nodes
    if(e == undefined || e.nodes == undefined || e.nodes[0] == undefined) {
      return;
    }

    //enlarge the clicked node and highlight its color
     var clickedNode= nodes.get(e.nodes[0]);
     nodes.update({
         id:clickedNode.id,
         font: {size:LARGE_NODE_SIZE},
         color:clickedNode.highlightColor
       });

   //add the node's data to the html fields
    document.getElementById("courseTitle").innerText = clickedNode.id + ": " +  clickedNode.title;
    document.getElementById("courseDescription").innerText = clickedNode.description;

    //set all ather nodes back to their default size and color
    nodes.forEach(function(n){
      if(n.id == clickedNode.id) return;
       nodes.update({
         id:n.id,
         font:{size:REGULAR_NODE_SIZE},
         color:n.regularColor
       })
    });

    //highlight the nodes that are prereqs
    _highlightPrereqNodes(clickedNode.id);


    //unhighlight all previous edges
    _unhighlightAllEdges();

    //highlight edges pointing to this node's prereqs
    let prereqs = clickedNode.prereqs;
    for(var key in prereqs){
      let prereqsSet = prereqs[key];
      for(var p in prereqsSet){
        let prereqIdToEdit = prereqsSet[p];
         let edgeToEdit = _getEdge(clickedNode.id, prereqIdToEdit);
         if(edgeToEdit == undefined) continue;
         edgeToEdit.width = LARGE_EDGE_WIDTH;
         edges.update(edgeToEdit);
      }
    }
    return;
  });
}


//gets all prerqs to the node with the given id and sets their color to their defined highlight color
function _highlightPrereqNodes(nodeId){
     let clickedNode = nodes.get(nodeId);
     let prereqsSet = clickedNode.prereqs;
     for(var key in prereqsSet){
       let prereqs = prereqsSet[key];
       for(var p in prereqs){
         let prereqNodeID = prereqs[p];
         let prereqNode = nodes.get(prereqNodeID);
         prereqNode.color = prereqNode.highlightColor;
         nodes.update(prereqNode)
       }
     }
}

function _unhighlightAllEdges(){
   edges.forEach(function(e){
     e.width = REGULAR_EDGE_WIDTH;
     edges.update(e)
   })
}

function _getEdge(from, to){
  let edgeToReturn = null;
  edges.forEach(function(e){
    if(e.from == from && e.to == to){
      edgeToReturn = e;
    }
  });
 return edgeToReturn;
}


//returns the prefis of a course. For example "CS 212" will return "CS"
function _getPrefix(courseName){
    return courseName.split(" ")[0];
}


//returns the post fix for a course. For example "CS 212" will return "212"
function _getPostfix(courseName){
  return courseName.split(" ")[1];
}


//called when the back button is clicket to return to the home page
function backButtonClick(){
  window.location.href = "home.html"
}
