/*global variable declarations*/

//variable below for add and subtract of logistic request
var los1 = document.getElementById("log_req1");
var los2 = document.getElementById("log_req2");
var los3 = document.getElementById("log_req3");
var los4 = document.getElementById("log_req4");
var los5 = document.getElementById("log_req5");
var losctr = 0;
//variable below for add and subtract of engineering verification request
var evf1 = document.getElementById("evf_req1");
var evf2 = document.getElementById("evf_req2");
var evf3 = document.getElementById("evf_req3");
var evf4 = document.getElementById("evf_req4");
var evf5 = document.getElementById("evf_req5");
var evfctr = 0;
//variable below for add and subtract of board modification request
var bmr1 = document.getElementById("bmr_req1");
var bmr2 = document.getElementById("bmr_req2");
var bmr3 = document.getElementById("bmr_req3");
var bmr4 = document.getElementById("bmr_req4");
var bmr5 = document.getElementById("bmr_req5");
var bmrctr = 0;


/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()

  var ctx = document.getElementById('myChart');
  var myLineChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          datasets: [{
              data: [5, 7, 4, 7, 9, 21, 1],
              backgroundColor: ["green", "yellow", "red", "orange", "blue", "violet", "indigo"]
          }]
      },
      options: {
          title: {
              
          }
      }
  });

  var ctx = document.getElementById('myLineChart');
        var myLineChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["TSR", "LR", "EVF", "BMR"],
                datasets: [{
                    data: [5, 7, 2, 1],
                    backgroundColor: ["green", "yellow", "red", "orange"]
                }]
            },
            options: {
                title: {
                    
                }
            }
        });
})()

//For Tab-pane mini-script other script was relying to bootstrap.js

var firstTabEl = document.querySelector('#myTab li:last-child a')
        var firstTab = new bootstrap.Tab(firstTabEl)
      
        firstTab.show()

//PieChart

var pieChartValues = [{
    y: 3,
    exploded: true,
    indexLabel: "TSR",
    color: "#00badd"
  }, {
    y: 7,
    indexLabel: "LR",
    color: "#e60023"
  }, {
    y: 1,
    indexLabel: "EVF",
    color: "#4267b2"
  }, {
    y: 2,
    indexLabel: "BMR",
    color: "#ef4d5d"
  }];
  renderPieChart(pieChartValues);
   
  function renderPieChart(values) {
   
    var chart = new CanvasJS.Chart("pieChart", {
      backgroundColor: "white",
      colorSet: "colorSet2",
   
      title: {
        text: "Daily Requests",
        fontFamily: "Verdana",
        fontSize: 25,
        fontWeight: "normal",
      },
      animationEnabled: true,
      data: [{
        indexLabelFontSize: 15,
        indexLabelFontFamily: "Monospace",
        indexLabelFontColor: "darkgrey",
        indexLabelLineColor: "darkgrey",
        indexLabelPlacement: "outside",
        type: "pie",
        showInLegend: false,
        toolTipContent: "<strong>#percent%</strong>",
        dataPoints: values
      }]
    });
    chart.render();
  }

/*add features additional and removal physical division for Logistic, EVF, Board Mod

  v1 uses case for every counter additional and remove. 
*/
//Logistic
function hide_los(){
  los1.style.display = "none";
  los2.style.display = "none";
  los3.style.display = "none";
  los4.style.display = "none";
  los5.style.display = "none";
  losctr = 0;
}

function add_los(){
  if (losctr <= 4) { losctr++; }
  switch(losctr){
    case 1:
      los1.style.display = "inherit";
      break;
    case 2:
      los2.style.display = "inherit";
      break;
    case 3:
      los3.style.display = "inherit";
      break;
    case 4:
      los4.style.display = "inherit";
      break;
    case 5:
      los5.style.display = "inherit";
      break;
    default:
      //default 
  }
  $("#LR_Req").modal("refresh");
}

function rem_los(){
  switch(losctr){
    case 1:
      los1.style.display = "none";
      break;
    case 2:
      los2.style.display = "none";
      break;
    case 3:
      los3.style.display = "none";
      break;
    case 4:
      los4.style.display = "none";
      break;
    case 5:
      los5.style.display = "none";
      break;
    default:
      //default 
  }
  if (losctr > 0) { losctr--; }
  $("#LR_Req").modal("refresh");
}
//EVF
function hide_evf(){
  evf1.style.display = "none";
  evf2.style.display = "none";
  evf3.style.display = "none";
  evf4.style.display = "none";
  evf5.style.display = "none";
  evfctr = 0;
}

function add_evf(){
  if (evfctr <= 4) { evfctr++; }
  switch(evfctr){
    case 1:
      evf1.style.display = "inherit";
      break;
    case 2:
      evf2.style.display = "inherit";
      break;
    case 3:
      evf3.style.display = "inherit";
      break;
    case 4:
      evf4.style.display = "inherit";
      break;
    case 5:
      evf5.style.display = "inherit";
      break;
    default:
      //default 
  }
  $("#EVF_Req").modal("refresh");
}

function rem_evf(){
  switch(evfctr){
    case 1:
      evf1.style.display = "none";
      break;
    case 2:
      evf2.style.display = "none";
      break;
    case 3:
      evf3.style.display = "none";
      break;
    case 4:
      evf4.style.display = "none";
      break;
    case 5:
      evf5.style.display = "none";
      break;
    default:
      //default 
  }
  if (evfctr > 0) { evfctr--; }
  $("#EVF_Req").modal("refresh");
}
//BMR
function hide_bmr(){
  bmr1.style.display = "none";
  bmr2.style.display = "none";
  bmr3.style.display = "none";
  bmr4.style.display = "none";
  bmr5.style.display = "none";
  bmrctr = 0;
}

function add_bmr(){
  if (bmrctr <= 4) { bmrctr++; }
  switch(bmrctr){
    case 1:
      bmr1.style.display = "inherit";
      break;
    case 2:
      bmr2.style.display = "inherit";
      break;
    case 3:
      bmr3.style.display = "inherit";
      break;
    case 4:
      bmr4.style.display = "inherit";
      break;
    case 5:
      bmr5.style.display = "inherit";
      break;
    default:
      //default 
  }
  $("#BMR_Req").modal("refresh");
}

function rem_bmr(){
  switch(bmrctr){
    case 1:
      bmr1.style.display = "none";
      break;
    case 2:
      bmr2.style.display = "none";
      break;
    case 3:
      bmr3.style.display = "none";
      break;
    case 4:
      bmr4.style.display = "none";
      break;
    case 5:
      bmr5.style.display = "none";
      break;
    default:
      //default 
  }
  if (bmrctr > 0) { bmrctr--; }
  $("#BMR_Req").modal("refresh");
}

/* do not delete follow codes for future use -Ivan
var ctr = 0;
  $(document).ready(function()
{
    $("#los1").toggle();
    $("#los2").toggle();
    $("#los3").toggle();
    $("#los4").toggle();
    $("#button1").click(function()
{
      $("#newModal").modal("toggle");
      //$("#los1").toggle();
      //$("#los2").toggle();
      //$("#los3").toggle();
      //$("#los4").toggle();
    });

$("#add_los").click(function()
{
      ctr++;
      $("#los"+ctr).toggle();
      $("#newModal").modal("refresh");
    });

$("#rem_los").click(function()
{
      $("#los"+ctr).toggle();
      ctr--;
      $("#newModal").modal("refresh");
    });
  });
*/

//Hidden Elements