function renderPosts(data) {

    let HTML = '';


    for (let i = 0; i < data.length; i++) {
        const post = data[i];

        HTML += `<div class="post">
                    <header>
                    ${post.author.name} ${post.author.lastname}
                    </header>
                    <div>
                    ${post.postTimestamp}
                    </div>
                    <div>
                    ${post.content.text}
                    </div>

                    </div>`;


    }

    console.log(HTML);

    const feedDOM = document.querySelector('main');
    // console.log(feedDOM);

    feedDOM.innerHTML = HTML;
    console.log(feedDOM);
}

export default renderPosts;
