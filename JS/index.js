
let savedPosts=[]
let posts = [] 
const inputText = document.getElementById('input-text')

//not relying on data coming from an api 
document.addEventListener('DOMContentLoaded', function() {
    getAllPosts();
    renderSaved();
})

//fetching data from api 
function getAllPosts() {
    fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed')
    .then(res => res.json())
    .then(postData => {
        posts = postData
        posts.forEach(post => {
            post = {...post,saved: false }
            renderOnePost(post)
        })
    })
}

//elements to create one card with title, image, excerpt, link, and button 
function renderOnePost(post) {
    let card = document.createElement('div')
    let btn = document.createElement('button')
    card.className = 'card'
    card.innerHTML = `
    <img src="${post.jetpack_featured_media_url}">
    <divclass="content">
        <h5>${post.title.rendered}</h5>
        <h6>${post.excerpt.rendered}</h6>
        <a href=${post.link} target="_blank" class="view">View Article</a>
    </div>
    `
    btn.textContent = "Save For Later"
    btn.className = "button"

    card.appendChild(btn)

    document.querySelector("#post-container").appendChild(card)

    btn.addEventListener('click', e => likedPost(card))
}

//compares values typed into the search par to the elements in title & excerpt 
//returns only cards matching those search elemnts and clears the rest 
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

//saves card to a global variable called savedPosts
function likedPost(card){
    savedPosts.push(card)
    console.log(savedPosts)
}

// appends "clicked" cards to page and removes unclicked- replaces current cards with cards currently saved in the global variable 
function renderSaved(){
    let saved = document.getElementById("saved")
    saved.addEventListener('click', () => {
    document.querySelector("#post-container").innerHTML = ""  
    savedPosts.forEach(post => document.querySelector("#post-container").append(post))
    })
}
