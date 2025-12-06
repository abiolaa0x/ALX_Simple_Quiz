const add = (num1, num2) => {
  return num1 + num2;
};

const difference = (num1, num2) => {
  return num1 - num2;
};

const product = (num1, num2) => {
  return num1 * num2;
};

const quotient = (num1, num2) => {
  return num1 / num2;
};

document.getElementById("add").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("number1").value) || 0;
  const num2 = parseFloat(document.getElementById("number2").value) || 0;

  const result = add(num1, num2);
  document.getElementById("calculation-result").textContent = result;
});

document.getElementById("subtract").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("number1").value) || 0;
  const num2 = parseFloat(document.getElementById("number2").value) || 0;

  const result = difference(num1, num2);
  document.getElementById("calculation-result").textContent = result;
});

document.getElementById("multiply").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("number1").value) || 0;
  const num2 = parseFloat(document.getElementById("number2").value) || 0;

  const result = product(num1, num2);
  document.getElementById("calculation-result").textContent = result;
});

document.getElementById("divide").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("number1").value) || 0;
  const num2 = parseFloat(document.getElementById("number2").value) || 0;

  const result = quotient(num1, num2);
  document.getElementById("calculation-result").textContent = result;
});
