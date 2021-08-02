function generatePassword() {

  let userChooseString = '';
  let password = '';
  const upperCaseString = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  const lowerCaseString = 'qwertyuiopasdfghjklzxcvbnm';
  const numberString = '1234567890';
  const specialcharactersString = `~!@#$%^&*()-_=+|]}[{;:,<.>/?`

  const lowerCaseCheckbox = document.getElementById('lcase');
  const upperCaseCheckbox = document.getElementById('ucase');
  const numbersCheckbox = document.getElementById('nums');
  const specialCharactersCheckbox = document.getElementById('chars');

  const passwordBox = document.getElementById('passwdP');
  const passwordLength = document.getElementById('passwdlgth').value;

  if (!lowerCaseCheckbox.checked && !upperCaseCheckbox.checked && !numbersCheckbox.checked && !specialCharactersCheckbox.checked) {
    passwordBox.innerText = 'You have to choose at least one option!'
  } else {
    if (lowerCaseCheckbox.checked) userChooseString += lowerCaseString
    if (upperCaseCheckbox.checked) userChooseString += upperCaseString
    if (numbersCheckbox.checked) userChooseString += numberString
    if (specialCharactersCheckbox.checked) userChooseString += specialcharactersString
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * userChooseString.length);
      password += userChooseString[randomIndex]
    }
    passwordBox.innerText = password;
  }
}