/*Traemos la clase .heart para manipularla*/
const heart = document.querySelector('.heart')

/*Agregamos el escucha de eventos para registrar los clicks, que le añada la clase heart-animation al primer click, pero se lo removemos al segundo click*/
heart.addEventListener('click', () => heart.classList.toggle('heart-animation'))