const line = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
const numberLine = line.value
text.style.fontSize = `${numberLine}px`
line.addEventListener('input', () => {
    const number = line.value
    text.style.fontSize = `${number}px`
})