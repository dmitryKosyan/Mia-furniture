import burger from './module/burgerPage'
burger()
const t2 = gsap.timeline();
t2.fromTo('.portfolio__title', {

    opacity: 0,
}, {
    opacity: 1,
    duration: 3
},
    0.4
)
t2.fromTo('.portfolio__text', {
    y: 100,
    opacity: 0,

}, {
    opacity: 1,
    y: 0,
    duration: 1
},
    0.4
)