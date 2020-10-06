function renderContentGallery(data){
    if (!data){
        console.warn('Error: generuojant galerija reikia duoti tinkama informacija/objekta');
        return '';
    }
    const maxGallerySize = 4;
    const totalPhotoCount = data.length;
    const visiblePhotoCount = totalPhotoCount > maxGallerySize ? maxGallerySize : totalPhotoCount;
    
    let extraAttribute = '';
    if (totalPhotoCount > maxGallerySize){
        extraAttribute = `data-extra="${totalPhotoCount - maxGallerySize}"`;
    }
    
    let imagesHTML = '';
    for (let i = 0; i < visiblePhotoCount; i++){
        if (i === visiblePhotoCount - 1){
            imagesHTML += `<div class="img" ${extraAttribute}>
                                <img src="./img/posts/${data[i]}" 
                                alt="photo">
                            </div>`;
        } else {
            imagesHTML += `<div class="img"><img src="./img/posts/${data[i]}" alt="photo"></div>`;
        }
    }

    return `<div class="gallery gallery-${visiblePhotoCount}">
                ${imagesHTML}
            </div> `;
}

export default renderContentGallery;
