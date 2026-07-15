const display = document.getElementById("display");
const history = document.getElementById("history");
const themeBtn = document.getElementById("themeBtn");

function appendValue(value){
  display.value += value;
}

function clearDisplay(){
  display.value = "";
}

function deleteOne(){
  display.value = display.value.slice(0, -1);
}

function calculate(){
  try{
    const expression = display.value;
    const result = eval(expression);

    addHistory(`${expression} = ${result}`);

    display.value = result;
  }
  catch{
    display.value = "Error";
  }
}

function squareRoot(){
  display.value = Math.sqrt(Number(display.value));
}

function square(){
  display.value = Math.pow(Number(display.value),2);
}

function sin(){
  display.value = Math.sin(Number(display.value));
}

function cos(){
  display.value = Math.cos(Number(display.value));
}

function tan(){
  display.value = Math.tan(Number(display.value));
}

function addHistory(text){
  const li = document.createElement("li");
  li.textContent = text;

  history.prepend(li);

  localStorage.setItem("history", history.innerHTML);
}

function loadHistory(){
  history.innerHTML =
    localStorage.getItem("history") || "";
}

loadHistory();

themeBtn.addEventListener("click", function(){
  document.body.classList.toggle("light");
});

// Keyboard support
document.addEventListener("keydown", function(e){
  const key = e.key;

  if(
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "."
  ){
    appendValue(key);
  }
  else if(key === "Enter"){
    calculate();
  }
  else if(key === "Backspace"){
    deleteOne();
  }
  else if(key === "Escape"){
    clearDisplay();
  }
});