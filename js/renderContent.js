import renderContentText from './renderContentText.js';
import renderContentGallery from './renderContentGallery.js';


function renderContent(data){
    return `<p>
        ${renderContentText(data.text)}
        ${renderContentGallery()}
    </p>`
}

export default renderContent;