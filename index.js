console.log("hello");

let screen = document.getElementById("screen");
let screenValue = "";
let buttons = document.querySelectorAll("button");

for (let item of buttons) {
  item.addEventListener("click", function (e) {
    let buttonText = e.target.innerText;
    console.log("clicked button is:", buttonText);

    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      // screenValue = eval(screenValue);
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

console.log("helloE ");
