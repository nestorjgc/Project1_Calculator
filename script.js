// 🐨 Replace text "You cannot read this." with "You've been hacked!"

const changeWord = document.getElementById("secretspot");
changeWord.innerHTML = "You've been hacked!";

// 🐨 When the form gets submitted perform the appropriate calculation.

const formEl = document.querySelector("form");

function performCalculation() {
  const num1 = Number(formEl.querySelector("#num1").value);
  const num2 = Number(formEl.querySelector("#num2").value);
  const operator = formEl.querySelector("#operator").value;
  //conditional statement to select whether adding, subtracting,
  //multiplying or dividing.
  if (operator === "subtract") {
    return num1 - num2;
  }
  if (operator === "add") {
    return num1 + num2;
  }
  if (operator === "multiply") {
    return num1 * num2;
  }
  if (operator === "division") {
    return num1 / num2;
  }
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = performCalculation();
  const answerEl = formEl.querySelector("#answer");
  answerEl.value = result;
});

//   Display result in answer text field
