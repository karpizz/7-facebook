import renderContentText from './renderContentText.js';
import renderContentGallery from './renderContentGallery.js';


function renderContent(data){
    let photosHTML = '';
    if (data.photos){
        photosHTML = renderContentGallery(data.photos);
    }

    let textHTML = '';
    if (data.text){
        textHTML = renderContentText(data.text);
    }

    return `<p>
        ${textHTML}
        ${photosHTML}
    </p>`;
}

export default renderContent;