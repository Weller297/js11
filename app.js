let box = document.querySelector('.box')
let amount = 725
let button = document.querySelector('.button')
for (let i = 0; i < amount; i++) {
    let item = document.createElement('div')
    item.classList.add('item')
    box.append(item)
    item.addEventListener('mouseleave', () => removeColor(item))
    item.addEventListener('mouseover', () => randomColor(item))
    button.addEventListener('click', () => reload(item))
}

function reload(el) {
    el.style.background = 'rgb(40,40,40)'
}


function removeColor(el) {
    el.style.background = 'none'
}
function randomColor(el) {
    let first = Math.floor(Math.random() * 255)
    let two = Math.floor(Math.random() * 255)
    let three = Math.floor(Math.random() * 255)
    el.style.background = `rgb(${first},${two},${three})`
}