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
divRef.addEventListener('click',onImageClick)
function onImageClick(event){
    blockStardartAction(event)
    if(event.target.nodeName !== "IMG"){
        return;
    }
    var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
    
    /* const instance = simpleLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `)
    instance.show(); */

    divRef.addEventListener("keydown", (event) => {
        if(event.code === "Escape"){
            instance.close();
        }
    })
}
function blockStardartAction(event){
    event.preventDefault()
}
