const display = document.querySelector("#display");

const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = "";
    } else if (item.id === "backspace") {
        let string = display.innerText.toString()
      display.innerText = string.substr(0, string.length-1);
    }
    else if(display.innerText !='' && item.id === "equal"){
display.innerText = eval(display.innerText)
    }
    else if(display.innerText == '' && item.id === "equal"){
        display.innerText = "Please enter something to calculate";
        setTimeout(() => display.innerText='',1500)
    }
    else {
        display.innerText += item.id;
    }
  };
});
