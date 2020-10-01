import renderSinglePost from './renderSinglePost.js';

function renderPosts(data) {

    let HTML = '';


    for (let i = 0; i < data.length; i++) {
        const post = data[i];

        HTML += renderSinglePost(post);


    }

    // console.log(HTML);

    const feedDOM = document.querySelector('main');
    // console.log(feedDOM);

    feedDOM.innerHTML = HTML;
    // console.log(feedDOM);
    // console.log(feedDOM.innerHTML);
}

export default renderPosts;
