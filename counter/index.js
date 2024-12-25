const decreaceBtn = document.getElementById("decreaceBtn");
const resetBtn = document.getElementById("resetBtn");
const increaceBtn = document.getElementById("increaceBtn");
const countlabel = document.getElementById("countlabel");
const increace2Btn = document.getElementById("increace2Btn");
let count = 0;
increaceBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreaceBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
increace2Btn.onclick = function(){
    count +=2;
    countlabel.textContent = count;
}