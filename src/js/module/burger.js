
const burger = () => {
    const burger = document.querySelector('.header__burger-block')
    const popup = document.querySelector('.header__menu-popup')
    const close = document.querySelector('.header__burger-close')
    const bgInner = document.querySelector('.header__burger-inner')
    burger.addEventListener('click', () => {
        popup.classList.toggle('active')
        bgInner.classList.toggle('active__bg')
        close.classList.toggle('active__close')

    })
}
export default burger