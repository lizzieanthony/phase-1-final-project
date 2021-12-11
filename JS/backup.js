document.addEventListener("DOMContentLoaded", () => {
    renderHomePage();
    getAllPosts()

    fetch("https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed")
    
})
//call what youure fetching, invoke it, write ind.


//****  Globals ****//




//**** Templates ****//

const homePageTemplate = () => {
    return `
    `
}

//**** Renders ****//
function renderOnePost(post){
let card = document.createElement('li')
card.className = 'card'
card.innerHTML = `
<img src="${}"
`
}


function initialize(){
    getAllPosts()
.forEach(post => renderOnePost(post))
}
initialize()


const renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
}



//**** Node Getters ****//
const mainDiv = () => document.getElementById("main");


//**** When the DOM loads ****//




function getAllPosts() {
    fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed')
    .then(res => res.json())
    .then(postData => {
        console.log(postData)
        postData.forEach(post => renderOnePost(post))
    })
    
}

document.getElementById("btn").addEventListener("click", likeCallback)

function displaySearchResults()  { 
    let x = document.getElementById("input-text");
    // document.getElementById("").innerHTML = "Search results for:" + x.value
    let cards = document.querySelectorAll("ul.card") 
    let cardsArray = Array.from(cards)
    let result = cardsArray.filter(card => {
        console.log(card) 
        // debugger
        if (Text.includes(x) == card.querySelector('h4').innerText) {}
        // if (card.querySelector.post.title.inclu == x)
        //return card
        //if card.querySelector. includes  x.value included in what im grabbing fom card 
        //return that card  

})


function displaySearchResults()  { 
    let x = document.getElementById("input-text");
    document.getElementById("").innerHTML = "Search results for:" + x.value
    let cards = document.querySelectorAll("ul.card") 
    let cardsArray = Array.from(cards)
    let result = cardsArray.filter(card => {
        if (text.includes(x) == card.querySelector('h4').innerText)
        return result.card
    })}

<a class="btn-floating btn-large halfway-fab waves-effect waves-light red" id="btn"><i class="material-icons">add</i></a>