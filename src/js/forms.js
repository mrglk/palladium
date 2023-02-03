import Validator from './classes/Validator';

export function initForms() {
  const forms = document.querySelectorAll('form')

  forms.forEach((form) => {
    form.addEventListener('submit', submitForm)
  })
}

function submitForm(e) {
  e.preventDefault()
  const form = e.currentTarget

  const validator = new Validator(form);
  const formData = new FormData(form);

  const url = form.getAttribute("action");
  const isFormValid = validator.validate();

  const button = form.querySelector('input[type="submit"]');

  if (!url || !isFormValid) {
    return;
  }

  if (button) {
    button.setAttribute('disabled', 'disabled')
  }

  fetch(url, {
    method: 'POST',
    body: formData
  })
    .then((response) => response.json())
    .then((response) => {
      form.reset()
      button.value = button.dataset.success || 'Sent'

      setTimeout(() => {
        button.removeAttribute('disabled')
      }, 2000)
    });
}

export function resetForm(form) {
  form.reset();
  const validator = new Validator(form);
  validator.clearErrors();
}
