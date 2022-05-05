function renderMovies(movies) {
    

    const movieHtmlArray = movies.map(function (currentMovie) {
        

        return `
        
        <div class="movie col-4">
        <div class="card" style="width: 18rem;">
        <div>
        <a href="https://www.imdb.com/title/${currentMovie.imdbID}/">
        <img src="${currentMovie.Poster}" class="card-img-top" alt="..." >
        </a>
        </div>
        <div class="card-body">
            <h5 class="card-title">${currentMovie.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted float-end movie-1">${currentMovie.Year}</h6>
            <p class="card-text">
            <p class="sum">
                <!-- flex start at the beginning or maybe it's float-end... -->
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMV-1" aria-expanded="false" aria-controls="collapseExample">
                Summary
                </button>
            </p>
            <div class="collapse" id="collapseMV-1" >
                <div class="card card-body">
                ${currentMovie.About}
                </div>
            </div>
            </p>
            <a href="#" class="btn btn-primary save">Add</a>
        </div>
        </div>
        </div>
    
        `
    })
    

const results = document.querySelector('#results')
results.innerHTML = movieHtmlArray.join('')
}

const myForm = document.querySelector('#search-form')
myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    



const searchString = document.querySelector('.search-bar').value
const urlEncodedSearchString = encodeURIComponent(searchString)
fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${urlEncodedSearchString}`)
.then(function(response){
    return response.json()
})
.then(function(movieData){
    renderMovies(movieData.Search)
    
})


    // might want to not have the reset could be the issue of not defined
    myForm.reset()

})
// function saveToWatchList() {
//     document.querySelector('.save')
//     console.log('yay... i was clicked')
// }

// Revisit your renderMovies() function
// Look in your template literal strings for wherever you’re rendering an “add movie” <button>  tag. 
// Give these buttons a onclick attribute that triggers a function called saveToWatchlist()
// Inject the IMDB id of the movie as the parameter passed in to saveToWatchlist() using ${   } notation
// Elsewhere in your index.js define the function saveToWatchlist(imdbID)



