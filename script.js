document.addEventListener('DOMContentLoaded', function () {
    const firstNameInput = document.getElementById('first-name-input');
    const lastNameInput = document.getElementById('last-name-input');
    const patronymicInput = document.getElementById('patronymic-input');
    const ageInput = document.getElementById('age-input');
    const passwordInput = document.getElementById('password-input');

    function validateFirstName() {
        const firstNameValue = firstNameInput.value.trim();
        const errorText = document.createElement('div');
        errorText.className = 'error-text';

        const existingError = firstNameInput.nextElementSibling;
        if (existingError && existingError.className === 'error-text') {
            existingError.remove();
        }

        if (firstNameValue.length < 2) {
            errorText.textContent = 'First name must contain at least 2 characters';
            firstNameInput.parentNode.appendChild(errorText);
            firstNameInput.classList.add('error');
        } else {
            firstNameInput.classList.remove('error');
        }
    }

    function validateLastName() {
        const lastNameValue = lastNameInput.value.trim();
        const errorText = document.createElement('div');
        errorText.className = 'error-text';

        const existingError = lastNameInput.nextElementSibling;
        if (existingError && existingError.className === 'error-text') {
            existingError.remove();
        }

        if (lastNameValue.length < 2) {
            errorText.textContent = 'Last name must contain at least 2 characters';
            lastNameInput.parentNode.appendChild(errorText);
            lastNameInput.classList.add('error');
        } else {
            lastNameInput.classList.remove('error');
        }
    }

    function validatePatronymic() {
        const patronymicValue = patronymicInput.value.trim();
        const errorText = document.createElement('div');
        errorText.className = 'error-text';

        const existingError = patronymicInput.nextElementSibling;
        if (existingError && existingError.className === 'error-text') {
            existingError.remove();
        }

        if (patronymicValue.length < 2) {
            errorText.textContent = 'Patronymic must contain at least 2 characters';
            patronymicInput.parentNode.appendChild(errorText);
            patronymicInput.classList.add('error');
        } else {
            patronymicInput.classList.remove('error');
        }
    }

    function validateAge() {
        const ageValue = ageInput.value;
        const errorText = document.createElement('div');
        errorText.className = 'error-text';

        const existingError = ageInput.nextElementSibling;
        if (existingError && existingError.className === 'error-text') {
            existingError.remove();
        }

        if (ageValue < 0 || ageValue > 120) {
            errorText.textContent = 'Please enter a valid age between 0 and 120';
            ageInput.parentNode.appendChild(errorText);
            ageInput.classList.add('error');
        } else {
            ageInput.classList.remove('error');
        }
    }

    function validatePassword() {
        const passwordValue = passwordInput.value;
        const errorText = document.createElement('div');
        errorText.className = 'error-text';

        const existingError = passwordInput.nextElementSibling;
        if (existingError && existingError.className === 'error-text') {
            existingError.remove();
        }

        if (passwordValue.length < 6) {
            errorText.textContent = 'Password must contain at least 6 characters';
            passwordInput.parentNode.appendChild(errorText);
            passwordInput.classList.add('error');
        } else {
            passwordInput.classList.remove('error');
        }
    }

    firstNameInput.addEventListener('blur', validateFirstName);
    lastNameInput.addEventListener('blur', validateLastName);
    patronymicInput.addEventListener('blur', validatePatronymic);
    ageInput.addEventListener('blur', validateAge);
    passwordInput.addEventListener('blur', validatePassword);
    passwordInput.addEventListener('input', validatePassword);
});