import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

console.log(galleryItems[0])

const divRef = document.querySelector('.gallery')

function createGalleryM(items){
    return items
        .map(
            (item)=> `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
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
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `)
    instance.show();

    divRef.addEventListener("keydown", (event) => {
        if(event.code === "Escape"){
            instance.close();
        }
    })
}
function blockStardartAction(event){
    event.preventDefault()
}
/* const gallerySection = document.getElementsByClassName('gallery') */
/* const gallery = document.querySelector('.gallery')

galleryItems.map((element)=>{
    let link = document.createElement('a')
    console.log(link)
    link.href=element.original

    let image = document.createElement('img')
    image.src = element.preview
    image.alt = element.description

    link.appendChild(image)
    gallery.appendChild(link)

    
}) */
document.querySelector('.gallery.firstchild').onclick = () => {

	basicLightbox.create(`
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`).show()

}


