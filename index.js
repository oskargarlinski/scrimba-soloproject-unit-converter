/*
1 meter = 3.281 feet
20 meters = 65.616 feet | 20 feet = 6.096 meters
1 liter = 0.264 gallon
20 liters = 5.284 gallons | 20 gallons = 75.708 liters
1 kilogram = 2.204 pound
20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
*/

const inputEl = document.getElementById("inputValue");
const convertBtn = document.getElementById("convertButton");

const lengthEl = document.getElementById("lengthResult");
const volumeEl = document.getElementById("volumeResult");
const massEl = document.getElementById("massResult");

convertBtn.addEventListener("click", function () {
  const inputValue = inputEl.value;

  let lengthResult = `${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`;
  let volumeResult = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters`;
  let massResult = `${inputValue} kilos = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos`;

  lengthEl.textContent = lengthResult;
  volumeEl.textContent = volumeResult;
  massEl.textContent = massResult;
});
