import "/src/app/scss/main.scss";
import {Bookcard} from '/src/CustomElements/BookCard/BookCard';

//define custom elementos
customElements.define('book-card', Bookcard)
let books = [{title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', 
description: 'El ingenioso hidalgo don Quijote de la Mancha narra las aventuras de Alonso Quijano,  un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo...' 
,url: '/dist/Books/Quijote.html'
}
,{
    title: 'Sinsajo', author: 'Suzanne Collins', 
    description: ' Después de ser rescatada de la arena en los 75º Juegos del Hambre, Katniss Everdeen, junto con otros dos Vencedores, Beetee y Finnick Odair, son llevados al Distrito 13' ,
    url:'/dist/Books/Sin_Ajo.html'
},{
    title: 'El Mundo de Sofía', author: 'Jostein Gaarder', 
    description: 'una niña de 15 años ecibe una carta anónima que le plantea una interrogante existencial.....' ,
    url: '/dist/Books/sofworld.html'
}]
    for (let i = 0; i < 3 ; i++) {
        const book = document.createElement('book-card');
        book.setAttribute('data', JSON.stringify(books[i]))
        const wrap = document.createElement('div')
        wrap.appendChild(book)
        wrap.style.width = '30%';
        wrap.style.height = '30%';
        document.getElementById("main-container").appendChild(wrap);
    }
     
 

