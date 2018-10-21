const $shield = document.querySelector('.shield');
const $dashedOutline = document.querySelector('.outline-thick');

$shield.addEventListener('click',()=>{
    $shield.classList.toggle('hiding')
    if($shield.classList.contains('hiding')){
        $dashedOutline.style.opacity = '0'
    }
    else{
        $dashedOutline.style.opacity = '1'
    }
})