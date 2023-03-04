import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector('.gallery')

function createGalleryM(items){
    return items
        .map(
            (item)=> `
            <a class="gallery__item" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    
                    alt="${item.description}"
                    />
                    </a>
                    </div>`
        )
        .join("")
}
const addgalleryM = createGalleryM(galleryItems)
divRef.innerHTML=addgalleryM
var lightbox = new SimpleLightbox('.gallery a', {captioDelay:250});
/* divRef.addEventListener('click',onImageClick) */
onImageClick()

function onImageClick(event){
    blockStardartAction(event)
    if(event.target.nodeName !== "IMG"){
        return;
    }
    var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
    
   

    divRef.addEventListener("keydown", (event) => {
        if(event.code === "Escape"){
            instance.close();
        }
    })
}
function blockStardartAction(event){
    event.preventDefault()
}




/*Asi estaba antes y tambien funciona/// pero no es necesario agregar add event listener 
const addgalleryM = createGalleryM(galleryItems)
divRef.innerHTML=addgalleryM
divRef.addEventListener('click',onImageClick)
function onImageClick(event){
    blockStardartAction(event)
    if(event.target.nodeName !== "IMG"){
        return;
    }
    var lightbox = new SimpleLightbox('.gallery a', {  options  });
    
   

    divRef.addEventListener("keydown", (event) => {
        if(event.code === "Escape"){
            instance.close();
        }
    })
}
function blockStardartAction(event){
    event.preventDefault()
} */
