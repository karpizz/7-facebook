import renderContentText from './renderContentText.js';
import renderContentGallery from './renderContentGallery.js';


function renderContent(data){
    if(!data){
        console.error('Error: negautas post object');
        return '';
    }

    let photosHTML = '';
    if (data.photos){
        photosHTML = renderContentGallery(data.photos);
    }

    let textHTML = '';
    if (data.text){
        textHTML = renderContentText(data.text, data.background);
    }

    return `<div class="content">
        ${textHTML}
        ${photosHTML}
    </div>`;
}

export default renderContent;