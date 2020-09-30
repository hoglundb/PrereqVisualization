//globals to hold the network data used by Vis.js
var nodes =  null;
var edges = null;
var data = null;
var network = null;

//attributes to tell vis.js how to draw the graph
const REGULAR_NODE_SIZE = 18;
const LARGE_NODE_SIZE = 24;
const NODE_SPACING = 130;
const TREE_SPACING = 10;
const LEVEL_SEPARATION = 130;
const SORT_METHOD = "directed";
const DIRECTION = "DU";

//color for edges in the graph
const EDGE_COLOR = "#9C9C9C";

//COLOR for a course that is a prereq, but outside the selected major
const NON_COURSE_PREREQ_COLOR = "C0C0C0"

//COLOR of nodes in the graph
const NODE_COLOR = "F3A8F3"

//the entry point for the program
window.addEventListener("load", async function(){
    await _buildMajorsDropdown();
    await buildNetwork(_getDropdownSelection("courseSelection"));
});



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

function _getDropdownSelection(elementId){
     let domRef = document.getElementById(elementId);
     return domRef.options[domRef.selectedIndex].value;
}


//TODO: need to be able to optionally show prerequisits not in the major
function buildNetwork(majorId){

   //add all of the nodes
   nodes = new vis.DataSet();
   let major = Majors[majorId];
   for(key in major.courses){
     let courseId = major.courses[key];
     let course = Courses[courseId]
     let node = {
       id: courseId,
       label:courseId,
       title:course.title,
       color: "#" + NODE_COLOR,
       font:{size:REGULAR_NODE_SIZE},
       description:course.description,
     }
     nodes.add(node);
   }

   //add all the edges (prereqs for each course in the selected major)
    edges = new vis.DataSet();
    for(key in major.courses){
     let courseId = major.courses[key]
     let curCourse=  Courses[courseId]


     //get all prereqs for that course in the current major
     for(var p in curCourse.prereqs){
           let prereq = curCourse.prereqs[p];

           //if the prereq is outside the major's courses, add a new node for that course
           let isPrereqInNetwork = false;
           nodes.forEach(function(n){
             if(n.id == prereq) {
               isPrereqInNetwork = true;
             }
           });
           if(isPrereqInNetwork == false){
             let prereqCourse = Courses[prereq];
             if(prereqCourse == undefined) console.error("The prereq " + prereq + "was not defined in the list of courses");
             nodes.add({id:prereq, label:prereq, title:prereqCourse.title, color: "#" + NON_COURSE_PREREQ_COLOR, font:{size:REGULAR_NODE_SIZE}});
           }

           let newEdge = {
             from: courseId,
             to: prereq,
             color: {
               color: EDGE_COLOR
             }
           }
           edges.add(newEdge)
     }
   }

   // create a network
   var container = document.getElementById('mynetwork');

   data = {
       nodes: nodes,
       edges: edges
   };
   var options = {
        layout: {
          hierarchical: {
            sortMethod:  SORT_METHOD,
            nodeSpacing: NODE_SPACING,
            treeSpacing: TREE_SPACING,
            levelSeparation: LEVEL_SEPARATION,
            direction: DIRECTION,
          },
        },
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

    //enlarge the clicked node
     var clickedNode= nodes.get(e.nodes[0]);
     nodes.update({id:clickedNode.id, font: {size:LARGE_NODE_SIZE}});

   //add the node's data to the html fields
    document.getElementById("courseTitle").innerText = clickedNode.id + ": " +  clickedNode.title;
    document.getElementById("courseDescription").innerText = clickedNode.description;

    //set all ather nodes back to their default size
    nodes.forEach(function(n){
      if(n.id == clickedNode.id) return;
       nodes.update({id:n.id, font:{size:REGULAR_NODE_SIZE}})
    });
  });
}


//returns the prefis of a course. For example "CS 212" will return CS
function _getPrefix(courseName){

    return courseName.split(" ")[0];
}
