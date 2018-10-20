const $cells = [...document.querySelectorAll('.bar .inner .cell')]

for (const $cell of $cells) {
    let timing = Math.floor(Math.random()*500 + 500)
    window.setInterval(()=>{
        $cell.classList.toggle('showing');
    }, timing)
}