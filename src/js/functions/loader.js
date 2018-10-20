const $loaderElement = document.querySelector('.loader__fullbar');

setTimeout(
    () => {
        $loaderElement.classList.add('end-loading')
    },
    2200
)
