const message = document.querySelector("#message")

console.log('hello world')

function addMovie(event) {
    event.preventDefault()
    const inputField = document.querySelector("input")
    const movie = document.createElement("li")
    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)

    const list = document.querySelector("ul")
    list.appendChild(movie)
    inputField.value = ""
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted!"
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if( event.target.classList.contains("checked")) {
        message.textContent = "Movie Watched!"
    } else {
        message.textContent = "Movie Added back to the list"
    }
}
const movieList = document.querySelector("form")
movieList.addEventListener('submit', addMovie)