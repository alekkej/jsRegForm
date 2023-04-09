'use strict'
// валидация E-mail

function validateEmail() {
    const {classList: wrapperClasses} = document.querySelector('.email-wrapper')
    const {value: email, classList: inputClasses} = document.querySelector('#email')

//     if(!isEmpty(email)) {
//         wrapperClasses.remove('error-empty-box') /// 'Поле обязательно для заполнения'

//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/        

//         if(!re.test(email)) {
//             inputClasses.add('error-box')
//             wrapperClasses.add('error-email-box') ///'E-mail введен неправильно'
//         } else wrapperClasses.remove('error-email-box') ///'E-mail введен неправильно'
//     } else {
//         wrapperClasses.remove('error-email-box') ///'E-mail введен неправильно'
//         wrapperClasses.add('error-empty-box') /// 'Поле обязательно для заполнения'
//         inputClasses.add('error-box')
//     } 
// }

if(!isEmpty(email)) {
    wrapperClasses.remove('error-empty-box')

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 

    if(!re.test(email)) {
        inputClasses.add('error-box')
        wrapperClasses.add('error-email-box')
    } else {
        inputClasses.remove('error-box')
        wrapperClasses.remove('error-email-box')
    }
} else {
    wrapperClasses.remove('error-email-box')
    wrapperClasses.add('error-empty-box')
    inputClasses.add('error-box')
}
}

// валидация пароля

function validatePassword() {
    const errorBox = document.querySelector('#error-box')
    const {value: password, classList: inputClasses} = document.querySelector('#password')

    if(!isEmpty(password)) {
        errorBox.style.display = 'none'

        if(password.lenght <= 5) {
            inputClasses.add('error-box')
            errorBox.textContent = 'Пароль должен быть длиннее 5 символов'
            errorBox.style.display = 'block'
        } else {
            inputClasses.remove('error-box')
            errorBox.style.display = 'none'
        } 
    }
    else {
        errorBox.textContent = 'Поле не может быть пустым'
        errorBox.style.display = 'block'
        inputClasses.add('error-box')
        }
    }

// проверка на пустое поле

function isEmpty(textValue) {
    return textValue.lenght === 0
}

// функция входа

function signIn() {
    const email = document.querySelector(`.input_email`).value
    const password = document.querySelector(`.input_password`).value

    const user = {email, password}
    console.log(user)
    
    document.location.href = './enter.html'
}

// функция регистрации 

function signUp() {

    validateEmail()

    const email = document.querySelector(`.input_email`).value
    const password = document.querySelector(`.input_password`).value

    localStorage.setItem('userEmail', email)

    
}

//

function getUsername() {
    const email = localStorage.getItem('userEmail')

    const messageElement = document.querySelector(`#message`)

    if(email) {
        messageElement.textContent = `Вы вошли в систему, ${email}`
    } else {
        messageElement.textContent = 'Что-то пошло не так'
    }
}
// функция выхода

function logout() {
    localStorage.removeItem(`userEmail`)
}

// function signIn() {
    
// }