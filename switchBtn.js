let body = document.querySelector('body')
let switchBtn = document.querySelector('.container__toggle-btn')

let switchTheme = function() {
    this.classList.toggle('active')
    body.classList.toggle('light')
    body.classList.toggle('dark')

}

switchBtn.addEventListener('click', switchTheme)