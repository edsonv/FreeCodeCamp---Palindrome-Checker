const checkButton = document.getElementById('check-btn');

const textInput = document.getElementById('text-input');

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const result = document.getElementById('result');
checkButton.addEventListener('click', () => {
  let value = textInput.value;
  let cleaned = value.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversed = cleaned.split('').reverse().join('');

  if (!value) {
    alert('Please input a value');
    return;
  }

  if (value.length === 1) {
    result.innerText = `${value} is a palindrome.`;
    return;
  }

  if (cleaned === reversed) {
    result.innerText = `${value} is a palindrome.`;
    return;
  } else {
    result.innerText = `${value} is not a palindrome.`;
  }
});
