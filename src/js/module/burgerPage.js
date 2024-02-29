const burgerPage = () => {
    const burger = document.querySelector('.headerPage__burger-block')
    const popup = document.querySelector('.headerPage__menu-popup')
    const close = document.querySelector('.headerPage__burger-close')
    const bgInner = document.querySelector('.headerPage__burger-inner')
    burger.addEventListener('click', () => {
        popup.classList.toggle('activePage')
        bgInner.classList.toggle('activePage__bg')
        close.classList.toggle('activePage__close')

    })
}
export default burgerPage