'use strict'
let isEmailCorrect = false
let email = ""
while(isEmailCorrect === false) {

    email = prompt('Введите email').trim()
    let connectorIndex = email.indexOf('@')
    let userName = email.slice(0,connectorIndex)
    let domain = email.slice(connectorIndex + 1)
    let dotIndex = domain.indexOf('.')
    let domainName = domain.slice(0,dotIndex)
    let domainHost = domain.slice(dotIndex + 1)
    if (connectorIndex >= 0
    && userName.length > 1
    && dotIndex >= 0
    && domainName.length > 1
    && domainHost.length > 1) {
        isEmailCorrect = true
    } else {
        alert('Вы не правильно ввели email')
    }
}
alert(`email ${email} принят`)