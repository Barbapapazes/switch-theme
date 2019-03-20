let switchBtn = document.querySelector('.container__toggle-btn')
let body = document.querySelector('body')

let switchTheme = function() {
    let linkCSS = document.querySelector('[type="text/css"]')
    this.classList.toggle('active')
    body.classList.toggle('light')
    body.classList.toggle('dark')

}

switchBtn.addEventListener('click', switchTheme)