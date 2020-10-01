import renderContentText from './renderContentText.js';
import renderContentGallery from './renderContentGallery.js';


function renderContent(){
    return `<p>
        ${renderContentText()},
        ${renderContentGallery()}
    </p>`
}

export default renderContent;