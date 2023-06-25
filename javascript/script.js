"use strict";

const outputEl = document.getElementById("outputScreen");
const clearEl = document.getElementById("clear");
const equalEl = document.querySelector(".equal");
const init = () => {
  outputEl.value = "";
};
let display = (num) => {
  outputEl.value += num;
};
let calculate = () => {
  try {
    outputEl.value = eval(outputEl.value);
  } catch (err) {
    alert("invalid format");
  }
};
let remove = () => {
  outputEl.value = "";
};
let del = () => {
  outputEl.value = outputEl.value.slice(0, -1);
};
document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "Enter") {
    calculate();
  }
});
init();
