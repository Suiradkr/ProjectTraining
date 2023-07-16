// Just a random function to change the yerr title  to check if javascript is connected properly
function changeColor() {
  let random = Math.floor(Math.random() * 10);
  let colorList = [
    "green",
    "blue",
    "red",
    "purple",
    "green",
    "black",
    "red",
    "purple",
    "yellow",
    "pink",
  ];
  let newColor = colorList[random];
  let element = document.getElementById("yerr");
  element.style.color = newColor;
}
