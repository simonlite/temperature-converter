const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertButton = document.getElementById('convert');

convertButton.addEventListener('click', () => {
	const celsiusValue = parseFloat(celsiusInput.value);
	const fahrenheitValue = (celsiusValue * 1.8) + 32;
	fahrenheitInput.value = fahrenheitValue.toFixed(2);
});
