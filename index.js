//generator password project
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let firstpassEl = document.getElementById("firstpass")
let secondpassEl = document.getElementById("secondpass")


function generate() {
  let lengthEl = document.getElementById("length-el").value;
  let number = parseInt(lengthEl);
  let symbolEl = document.getElementById("symbol-el")
  let numberEl = document.getElementById("numbers-el")

  firstpassEl.textContent = ""
  secondpassEl.textContent = ""
  if (number > 7 && number < 19) {
    if (symbolEl.checked) {
      if (numberEl.checked) {
        for (let i = 0; i < number; i++) {
          let random1 = Math.floor(Math.random() * characters.length)
          let random2 = Math.floor(Math.random() * characters.length)
          if (!["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(characters[random1])
            &&
            !["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(characters[random2])) {
            firstpassEl.textContent += characters[random1];
            secondpassEl.textContent += characters[random2];
          } else {
            i--
          }
        }
      } else if (!numberEl.checked) {
        for (let i = 0; i < number; i++) {
          let random1 = Math.floor(Math.random() * characters.length)
          let random2 = Math.floor(Math.random() * characters.length)
          if (!["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"].includes(characters[random1])
            &&
            !["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"].includes(characters[random2])) {
            firstpassEl.textContent += characters[random1];
            secondpassEl.textContent += characters[random2];
          } else {
            i--
          }
        }
      }
    }
    if (!symbolEl.checked) {
      if (!numberEl.checked) {
        for (let i = 0; i < number; i++) {
          let random1 = Math.floor(Math.random() * characters.length)
          let random2 = Math.floor(Math.random() * characters.length)
          firstpassEl.textContent += characters[random1]
          secondpassEl.textContent += characters[random2]
        }
      } else if (numberEl.checked) {
        for (let i = 0; i < number; i++) {
          let random1 = Math.floor(Math.random() * characters.length)
          let random2 = Math.floor(Math.random() * characters.length)
          if (!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(characters[random1])
            &&
            !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(characters[random2])) {
            firstpassEl.textContent += characters[random1];
            secondpassEl.textContent += characters[random2];
          } else {
            i--
          }
        }
      }
    }
  }
}

// function getRandomCharacter() {
//   let randomIndex = Math.floor(Math.random() * characters.length);
//   return characters[randomIndex];
// }



// function copyPassword(passwordText) {
//   navigator.clipboard.writeText(passwordText);
//   showToastContainer()
// }

// function showToastContainer() {
//   toastDiv.textContent = "Copied to clipboard!"
//   toastDiv.classList.add("toast-container");
//   toastDiv.classList.add("elementToFadeInAndOut");
//   // Sets a 4s timer to remove the classes
//   setTimeout(function () {
//     toastDiv.classList.remove("elementToFadeInAndOut");
//     toastDiv.classList.remove("toast-container");
//     toastDiv.textContent = ""
//   }, 4000);
// }


