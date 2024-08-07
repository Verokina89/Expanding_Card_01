document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.imgCard')
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            removeActiveClass();
            card.classList.add('active');
            card.classList.remove('small');
        });
    
    });
    
    function removeActiveClass() {
        cards.forEach(card => {
            card.classList.remove('active')
            card.classList.add('small')
        })
    }
})



/*-------Condicionales --------*/
// const cards = document.querySelectorAll('.imgCard');

// // Recorre cada elemento en 'cards' y añade el evento 'click'
// cards.forEach(card => {
//     card.addEventListener('click', () => {
//         //se llama a la funcion que pasa como argumento la imagen clicada
//         toggleActive(card);
//     });
// });

// //se define la funcion que activar/desactivar las imagenes
// const toggleActive = (eventClick) => {
//     // Si la img esta clicada 'active', queda igual
//     if (eventClick.classList.contains('active')) {
//         return;
//     } else {//si la img no esta 'active'
//         //recorre las 'cards' y elimina la clase 'active'.
//         cards.forEach(card => {
//             card.classList.remove('active');
//         });
//         // Añade la clase 'active' a la img clicada.
//         eventClick.classList.add('active');
//     }
// };



