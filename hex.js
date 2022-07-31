const changeBtn = document.querySelector('.button')
const colorValue = document.querySelector('.color-value')
const logo = document.querySelector('h2')
changeBtn.addEventListener('click', changeColor);

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function changeColor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++){
        const random = Math.floor(Math.random() * hex.length)
        hexColor += hex[random];
    }
    logo.style.color = hexColor
    colorValue.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;    
}
