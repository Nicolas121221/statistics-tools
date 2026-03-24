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

  thead.innerHTML = "<td>Data</td>";
  tbody.innerHTML = "";
  values.forEach((value) => {
    if (isNaN(value)) return;

    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerText = value;
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
}

function validateTable(values) {
  return isNaN(values[0]) && values.length === 1;
}

function average(arr) {
  const average =
    arr.reduce((acc, cur) => {
      if (isNaN(cur)) return acc;
      return acc + cur;
    }, 0) / arr.length;

  return average;
}

function median(arr) {
  const middlePoint = arr.length / 2;

  if (arr.length === 1) return arr[0];
  else if (arr.length % 2 === 0) {
    const medianArray = [arr[arr.length / 2], arr[arr.length / 2 + 1]];
    console.log(medianArray);
    return average(medianArray);
  } else {
    return arr[(arr.length - 1) / 2];
  }
}

function mode(arr) {
  const sizes = new Map();

  arr.forEach((element) => {
    if (!sizes.has(element)) return sizes.set(element, 1);
    sizes.set(element, sizes.get(element) + 1);
  });

  console.log(sizes)

  let highestValue = 0;
  let keys = [];
  sizes.forEach((val, key) => {
    if (val > highestValue) {
      highestValue = val;
      keys = [key];
    } else if (highestValue === val) {
      keys.push(key);
    }
  });

  if(keys.length > 2) return "no mode"
  return keys;
}
