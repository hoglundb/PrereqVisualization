//globals to hold the network data used by Vis.js
var nodes =  null;
var edges = null;
var data = null;
var network = null;

//the entry point for the program
window.addEventListener("load", function(){

     buildNetworkTest();

});


//builds the vis.js network from the testData.js dataset
function buildNetworkTest(){

     nodes = new vis.DataSet();
     for(var item in TestData1.courses){
       let nodeData = TestData1.courses[item]

       let node = {id: nodeData.name, label:nodeData.name}
       nodes.add(node);
     }

     var edges = new vis.DataSet();
     for(var item in TestData1.courses){
       let curNode = TestData1.courses[item];
       let prereqs = curNode.prereqs;
       for(var p in prereqs){
         let newEdge = {from: curNode.name, to: prereqs[p]}
         console.log(newEdge)
         edges.add(newEdge);
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
              nodeSpacing:1,
              sortMethod:  "directed", //"hubsize"
              nodeSpacing:110,
              treeSpacing:10,
              levelSeparation:130,
              direction:"DU",
            },
          },
          edges: {
            smooth: true,
            arrows: { to: true },
          },

          physics:{
             enabled: false, //don't want this looking like jello
          }
        };
     network = new vis.Network(container, data, options);
}
