const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const passwordInput = document.getElementById('password');

generateBtn.addEventListener('click', () => {
  const length = document.getElementById('length').value;
  const uppercase = document.getElementById('uppercase').checked;
  const lowercase = document.getElementById('lowercase').checked;
  const numbers = document.getElementById('numbers').checked;
  const symbols = document.getElementById('symbols').checked;

  passwordInput.value = generatePassword(length, uppercase, lowercase, numbers, symbols);
});

copyBtn.addEventListener('click', () => {
  passwordInput.select();
  document.execCommand('copy');
  alert('Password copied to clipboard');
});

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
  let charset = '';

  if (uppercase) {
    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (lowercase) {
    charset += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (numbers) {
    charset += '0123456789';
  }

  if (symbols) {
    charset += '!@#$%^&*()_+={}[]\\|:;"<>,.?/~`';
  }

  let password = '';

  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
}