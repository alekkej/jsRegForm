'use strict'


function signUp() {
    const emailIsValid = validateEmail() 
    const passwordIsValid = validatePassword()
    const checkboxIsValid = validateCheckbox()

    if(emailIsValid && passwordIsValid && checkboxIsValid) {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        
        const user = {email, password}

        const users = JSON.parse(localStorage.getItem('user')) || [];
        if (!users.find(({email}) => user.email === email)) {
            users.push(user)
            alert ('Успешная регистрация') 
            localStorage.setItem('user', JSON.stringify(users))
        } else alert ('Такой пользователь уже существует')
    }
}

function signIn() {
    const emailIsValid = validateEmail() 
    const passwordIsValid = validatePassword()

    if(emailIsValid && passwordIsValid) {
        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value
        const users = JSON.parse(localStorage.getItem('user')) || [];
        if(users.find(user => user.email === email && user.password === password)) {
            alert('Вход осуществлен')
        } else alert('Такой пользователь не существует')
    }
}

function validateEmail() {
    const emailElement = document.querySelector('#email')
    const emailErrorBox = document.querySelector('#email-error-box')

    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(!isEmpty(emailElement, emailErrorBox)) {
        if(emailRegExp.test(emailElement.value)) {
        toggleErrorMessage(emailElement, emailErrorBox)

        return true
    } else {
        toggleErrorMessage(emailElement, emailErrorBox, 'Некорректный E-mail')
    }
}
    return false
}

function validatePassword() {
    const passwordElement = document.querySelector('#password')
    const passwordErrorBox = document.querySelector('#password-error-box')

    if(!isEmpty(passwordElement, passwordErrorBox)) {
        if(passwordElement.value.length >= 8) {
            toggleErrorMessage(passwordElement, passwordErrorBox)
            return true
        } else {
            toggleErrorMessage(passwordElement, passwordErrorBox, 'Пароль должен содержать как минимум 8 символов')
        }
    }
    return false
}

function validateCheckbox() {
    const checkboxElement = document.querySelector('#checkbox')
    const checkboxErrorBox = document.querySelector('#checkbox-error-box')

    if(checkboxElement != null && checkboxErrorBox !=null) {
        if(checkboxElement.checked) {
            toggleErrorMessage(checkboxElement, checkboxErrorBox)

            return true
        } else {
            toggleErrorMessage(checkboxElement, checkboxErrorBox, 'Обязательно для соглашения')
        }

        return false
    }
}


function isEmpty(inputElement, errorBox) {
    if (inputElement.value.length === 0) {

        toggleErrorMessage(inputElement, errorBox, 'Поле обязательно для заполнения')

        return true 
    } else {
 
        toggleErrorMessage(inputElement, errorBox)

        return false
    }
}

function toggleErrorMessage(inputElement, errorBox, errorMessage) {
    if(errorBox != null){
        if(errorMessage) {
        inputElement.classList.add('error-box')
        errorBox.textContent = errorMessage
        errorBox.style.display = 'block'
    } else {
        inputElement.classList.remove('error-box')
        errorBox.style.display = 'none'
    }
  }
}


