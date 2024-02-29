function spinner(event) {
    const spinnerWheel = document.querySelector('.lds-roller')
    const massege = document.querySelector('.massege')
    setTimeout(() => {
        spinnerWheel.style.display = 'inline-block'
        setTimeout(() => {
            spinnerWheel.style.display = 'none'
            massege.style.display = 'block'
        }, 4000);
    }, 500);
    const target = event.target
    // const productAdd = target.closest('.product__add-ingridient')
    // const addingridientsModal = productAdd.querySelector('.modal__inner')
    // addingridientsModal.style.display = 'block';

    window.addEventListener('click', () => {
        if (target.closeet !== ('.massege')) {
            massege.style.display = 'none'
        }
    })

}
export default spinner