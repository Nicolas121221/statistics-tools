import { average, median, mode } from "./statistics.js";

const dataInput = document.querySelector("#data");
const averageOutput = document.querySelector("output#average");
const medianOutput = document.querySelector("output#median");
const modeOutput = document.querySelector("output#mode");

dataInput.addEventListener("keyup", (e) => {
  const data = formatInput(e.target.value);
  createTable(data);
  averageOutput.innerText = average(data);
  medianOutput.innerText = median(data);
  modeOutput.innerText = mode(data);
});

function formatInput(inputValue) {
  inputValue.replace(/ /, "");
  inputValue.replace(/,+$/, "");
  const elements = inputValue.split(/,/gm);

  dataInput.value = elements;
  const arr = [];
  elements.forEach((element) => {
    const arrNum = parseFloat(element);
    if (!isNaN(arrNum)) return arr.push(arrNum);
  });

  return arr.sort((a, b) => a > b);
}

function createTable(values) {
  const thead = document.querySelector("thead");
  const tbody = document.querySelector("tbody");

  if (validateTable(values)) {
    tbody.innerHTML = "";
    thead.innerHTML = "";
    return;
  }

  thead.innerHTML = "<tr><td>Position</td><td>Data</td></tr>";
  tbody.innerHTML = "";
  values.forEach((value, i) => {
    if (isNaN(value)) return;

    const tr = document.createElement("tr");
    const tdPos = document.createElement("td");
    const tdData = document.createElement("td");

    tdPos.innerText = i + 1;
    tdData.innerText = value;

    tr.appendChild(tdPos);
    tr.appendChild(tdData);
    tbody.appendChild(tr);
  });
}

function validateTable(values) {
  return isNaN(values[0]) && values.length === 1;
}
