// UI Element
let one = document.querySelector("#one");
// Event Listener
one.addEventListener("click", display(1));

// function
function display(val) {
  document.querySelector("#display").value = `${
    document.querySelector("#display").value
  } ${val}`;
}
