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
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMV-${currentMovie.imdbID}" aria-expanded="false" aria-controls="collapseExample">
                Summary
                </button>
            </p>
            <div class="collapse" id="collapseMV-${currentMovie.imdbID}" >
                <div class="card card-body">
                ${currentMovie.Year}
                </div>
            </div>
            </p>
            <a href="#" class="btn btn-primary add-button save data-imdbid=${currentMovie.imdbID}" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</a>
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
        .then(function (response) {
            return response.json()
        })
        .then(function (movieData) {
            renderMovies(movieData.Search)
            

        })
    // might want to not have the reset could be the issue of not defined
    myForm.reset()

})


const addButton = document.querySelector('.add-button')

document.addEventListener('click', function(event){
    if(event.target.contains(addButton)){
        const movieID = event.target.dataset.imdbid
        // console.log(movieID)

    }
})
function saveToWatchlist(movieID) {
    console.log('yay... i was clicked')
    console.log(movieID)
}

