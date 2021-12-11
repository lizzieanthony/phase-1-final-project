
document.addEventListener('DOMContentLoaded', function() {
    getAllPosts();
})

let posts = []

function getAllPosts() {
    fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed')
    .then(res => res.json())
    .then(postData => {
        posts = postData
        posts.forEach(post => renderOnePost(post))
    })

}

function renderOnePost(post) {
    let card = document.createElement('div')
    let btn = document.createElement('button')
    card.className = 'card'
    card.innerHTML = `
    <img src="${post.jetpack_featured_media_url}">
    <divclass="content">
        <h4>${post.title.rendered}</h4>
        <h6>${post.excerpt.rendered}</h6>
        <a href=${post.link} target="_blank" class="view">View Article</a>
    </div>
    `
    btn.textContent = "Save For Later"
    btn.className = "button"

    btn.addEventListener('click', function() {
          renderOnePost(post)
        })

    card.appendChild(btn)

    document.querySelector("#post-container").appendChild(card)
}

const inputText = document.getElementById('input-text')

inputText.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    document.querySelector("#post-container").innerHTML = "" 
    const filteredPosts = posts.filter((post) => {
        return(
            post.title.rendered.toLowerCase().includes(searchString) ||
            post.excerpt.rendered.toLowerCase().includes(searchString)
        );
    })
    filteredPosts.forEach(post => renderOnePost(post))
});

