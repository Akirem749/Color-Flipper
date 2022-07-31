const changeBtn = document.querySelector('.button')
const colorValue = document.querySelector('.color-value')
const logo = document.querySelector('h2')
changeBtn.addEventListener('click', changeColor);

function changeColor() {
    let random = Math.floor(Math.random() * 255 + 1);
    let random1 = Math.floor(Math.random() * 255 + 1);
    let random2 = Math.floor(Math.random() * 255 + 1);
    logo.style.color = `rgb(${random},${random1},${random2})`
    colorValue.textContent = `RGB( ${random} , ${random1} , ${random2} )`
    document.body.style.backgroundColor = `rgb(${random},${random1},${random2})`
}