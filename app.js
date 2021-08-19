function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const Pinstring = pin + '';
  if (Pinstring.length == 4) {
    return pin;
  } else {
    return pin;
  }
}

function ganaretPin() {
  const pin = getPin();
  document.getElementById('Disply-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById('typed-numbers');
  if (isNaN(number)) {
    if (number == 'C') {
      calcInput.value = '';
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

function veryFypin() {
  const pin = document.getElementById('Disply-pin').value;
  const typedNumbers = document.getElementById('typed-numbers').value;
  const successMessage = document.getElementById('notify-success');
  const failMessage = document.getElementById('notify-fail');
  if (pin == typedNumbers) {
    successMessage.style.display = 'block';
    failMessage.style.display = 'none';
  } else {
    successMessage.style.display = 'none';
    failMessage.style.display = 'block';
  }
}
