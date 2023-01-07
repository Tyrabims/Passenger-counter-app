let countEL = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let saveEL = document.getElementById("save-btn");
let count = 0;

function increment() {
  count += 1; 
  countEL.textContent = count;
  
}


function save() {
let countStr = count + " - ";
saveEl.textContent += countStr;
countEL.textContent = 0;
count = 0;
}

