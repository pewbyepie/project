//Pobieranie danych
const form = document.getElementById('form');
const formControl = document.querySelector('.form-control');
const name = document.getElementById('imie');
const email = document.getElementById('email');
const nazwafirmy = document.getElementById('nazwafirmy');
const number = document.getElementById('number');
const message = document.getElementById('message')
const checkbox = document.querySelector('.checkbox-round');

//event dla przycisku wyslij
form.addEventListener("submit", e => {
  e.preventDefault();

//sprawadzanie wartości wpisywanych w konsoli
console.log(name.value);
console.log(email.value);
console.log(nazwafirmy.value);
console.log(number.value);
console.log(message.value);

//Aktywowanie funkcji check
  check();
})

//Przeniesienie value messege w small, pokaze message pod kazdym inputem
function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

//sprawdzanie czy email jest prawidlowy
function emailcheck(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
  }

//walidacja 
function check() {
  
  const namev = name.value;
  const emailv = email.value;
  const nazwafirmyv = nazwafirmy.value;
  const numberv = number.value;

    if (namev === '') {
      setError(namev, 'Puste pole');
    }
  
    if (emailv === '') {
      setError(emailv, 'Nieprawidłowy adres');
    } else if (!emailcheck(emailv)) {
      setError(emailv, 'Nieprawidłowy adres email');
    }
  
    if (numberv === '') {
      setError(numberv, 'Puste pole');
    }
  
    if (nazwafirmyv === '') {
      setError(nazwafirmyv, 'Puste pole');
    } 
  }
  
