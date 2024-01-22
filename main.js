var score=0;

function decrease(){
    score=score-30;
    document.getElementById("box").textContent=score;
}

function increase(){
    score=score+30;
    document.getElementById("box").textContent=score;
}