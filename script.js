var timer = 60;
var score = 0;
var hitrn =0 ;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
// increaseScore()  

function createBubble() {
  let clutter = "";
  for (var i = 0; i < 96; i++) {
    let raval = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${raval}
    </div>`;
  }
  document.querySelector("#container-btm").innerHTML = clutter;
}
createBubble();

function runTimer() {
  var timeint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeval").textContent = timer;
    }else{
        clearInterval(timeint);
        document.querySelector("#container-btm").innerHTML = ` <div id="end">
        <h1>Game Over</h1>
        <h3>Reload to play again</h3>
    </div>`;
    }
  }, 1000);
}
runTimer();

function hitval(){
    hitrn = Math.floor(Math.random() *10)
    document.querySelector("#hitval").textContent = hitrn
}
hitval();

document.querySelector("#container-btm").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent)
    if(clickedNum===hitrn){
        increaseScore()
        createBubble()
        hitval();
    }
})

