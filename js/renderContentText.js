/*
Teksto apimtys:
- mazai: 1-60
- vidutiniskai: 61-300
- daug: 301-10000
*/

function renderContentText(text){
    //validacija
    if (!text){
        console.error('ERROR: NERA TEKSTO!');
        return '';
    }

    if (text.length < 61){
        return `<p class="big-size">${text} </p>`;
    } else if (text.length < 301){
        return `<p>${text} </p>`;
    } else {
        let shortText = '';
        for (let i = 0; i < 300 ; i++){
            shortText += text[i];
        }
        return `<p>${shortText}... <span class="more">See more</span></p>`;
    }
}
export default renderContentText;