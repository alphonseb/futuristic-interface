const $screenRotateWrappers = [...document.querySelectorAll('.screens .screen .rotate-wrapper')];

for (const $rotateWrapper of $screenRotateWrappers) {
    let $inner = $rotateWrapper.querySelector('.inner')
    let innerWidth = $inner.clientWidth
    let innerHeight = $inner.clientHeight
    
    window.addEventListener('resize', ()=>{
        innerWidth = $inner.clientWidth
        innerHeight = $inner.clientHeight
        // innerRect = $inner.getBoundingClientRect()
    })
    
    document.addEventListener('mousemove',(e)=>{
        let innerRect = $inner.getBoundingClientRect()
        let x = ((e.clientX - innerRect.left) / innerWidth - 0.5) * 30
        if (x > 30){
            x = 30
        }
        else if (x < -30){
            x = -30
        }
        let y = ((e.clientY - innerRect.top) / innerHeight - 0.5) * 30
            if (y > 10){
                y = 10
            }
            else if (y < -10){
                y = -10
            }

        $rotateWrapper.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`
    })
}