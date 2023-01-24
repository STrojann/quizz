var time = document.querySelector("#time");

var timer = document.querySelector(".timer");
var timeremaining = 60
var questiondiv = document.querySelector("#questions");
var startbutton = document.querySelector("#start");
var startdiv = document.querySelector("#start-screen");
var highscorediv = document.querySelector("#clear");
function startquiz() {
  starttimer();
  showquestion();
  startdiv.setAttribute("class", "hide");
questiondiv.setAttribute("class", "")

}
function showquestion(){
}
function starttimer(){
    console.log("hello")
   var interval = setInterval(() => {
        timeremaining-- 
        time.textContent = timeremaining
        if(timeremaining <= 0){
            clearInterval(interval)
        }
    
    }, 1000);
}
startbutton.addEventListener("click", startquiz);

