function renderHeader(){
    return `
    <header>
    ${post.author.name} ${post.author.lastname}
    </header>
    `
}

export default renderHeader;