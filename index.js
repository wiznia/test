const form = document.querySelector('form');
const inputFields = Array.from(document.querySelectorAll('.login__input'));

// Checks for the form's validity to enable the next button
form.addEventListener('change', () => {
  document.querySelector('.login__button').disabled = !form.checkValidity();
});

// Loop over all fields and check for errors
inputFields.forEach(input => {
  input.addEventListener('input', function() {
    const error = this.parentNode.nextElementSibling;
    const inputType = this.getAttribute('name');
    if (this.validity.valid) {
      if (error.classList.contains('login__error')) {
        error.textContent = '';
      }
    } else {
      if (this.validity.valueMissing) {
        error.textContent = `Please enter your ${inputType}.`;
      } else if (inputType === 'email' && this.validity.typeMismatch) {
        error.textContent = 'Please enter a valid email address';
      } else if (inputType === 'password' && this.validity.tooShort) {
        error.textContent = `Please enter at least ${this.minLength} characters`;
      }
    }
  });
});

// Password reveal function
document.querySelector('.login__field-password-reveal').addEventListener('click', function() {
  const input = this.parentNode.querySelector('.login__input');
  const type = input.getAttribute('type');

  if (type === 'password') {
    input.setAttribute('type', 'text');
  } else {
    input.setAttribute('type', 'password');
  }
});
