function renderHeader(data, time) {
    return `<header class="post-header">
        <img class="avatar" src="./img/users/${data.photo}" alt="User profile picture">
        <div class="profileNameSurname">
            <a class="user-link"  href="#/user/${data.link}">${data.name} ${data.lastname}</a>
            <div class="timeStamp">6h ago (${time}) </div>
            </div>
        <i class="fa fa-ellipsis-h"></i>
    </header>`
}

export default renderHeader;