const inputEl = document.getElementById("inputValue");
const convertBtn = document.getElementById("convertButton");

const lengthEl = document.getElementById("lengthResult");
const volumeEl = document.getElementById("volumeResult");
const massEl = document.getElementById("massResult");

convertBtn.addEventListener("click", function () {
  const inputValue = inputEl.value;

  if (inputValue === "" || isNaN(inputValue)) {
    const message = "Please enter a valid number";
    lengthEl.textContent = message;
    volumeEl.textContent = message;
    massEl.textContent = message;
    return;
  }

  let lengthResult = `${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`;
  let volumeResult = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters`;
  let massResult = `${inputValue} kilos = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos`;

  lengthEl.textContent = lengthResult;
  volumeEl.textContent = volumeResult;
  massEl.textContent = massResult;
});
