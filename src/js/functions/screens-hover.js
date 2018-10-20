const screens = [...document.querySelectorAll('.screens .screen')]
const links = [...document.querySelectorAll('.links .link')]

for (const index in screens) {
    screens[index].addEventListener('mouseover',()=>{
        links[index].classList.add('drawing')
    })
}