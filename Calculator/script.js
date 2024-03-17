let screen = document.querySelector(".screen");  //accessing the display screen
let numbers = document.querySelectorAll("button");  //accessing the buttons
const operator = ["%","*", "/", "-", "+", "="];
let output = "";

//store numerical value on each button element ad theen retrieve it
numbers.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

const calculate = (val) => {
    console.log(val);
    if(val === "=" && output !== "") {
        output = eval(output.replace("%","/100"))   
    }
    else if (val ==="AC") {   
        output = "";           //clears screen
    }
    else if (val ==="DEL") {
        output = output.toString().slice(0,-1);   //deletes last element
    }
    else{
        if(output === "" && operator.includes(val)) return;
        output += val;
    }
    screen.value = output;

}


