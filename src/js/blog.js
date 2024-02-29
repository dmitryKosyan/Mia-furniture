import burger from './module/burgerPage'
import spinner from './module/spinner'
burger()
const orderButton = document.querySelector('.feedback__button-link')
orderButton.addEventListener('click', spinner)
