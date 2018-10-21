//Unused in final version

const $draggables = [...document.querySelectorAll('.draggable')]
let clicked = false

for (const $draggable of $draggables) {
    $draggable.addEventListener('mousedown',(e)=>
    {
        clicked = true

        let rotateWrapper = $draggable.querySelector('.rotate-wrapper');
        $draggable.style.cursor = 'grabbing'
        const mouseDownX = e.clientX
        const mouseDownY = e.clientY

        
        document.addEventListener('mousemove',(e)=>{
            const x = e.clientX - mouseDownX
            const y = e.clientY - mouseDownY


            if (clicked){
                rotateWrapper.style.transform = 'rotateY(0) rotateX(0)'
                $draggable.style.animationPlayState = 'paused'
                $draggable.style.transform = `translateX(${x}px) translateY(${y}px)`
            }

        })
    })
    
}
document.addEventListener('mouseup',()=>
{
    clicked = false
    for (const $draggable of $draggables) {
        $draggable.style.cursor = 'grab'
    }
})