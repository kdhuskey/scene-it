function renderMovies(movies) {
    Promise.all(movies.map(movie => {
        return fetch(`http://www.omdbapi.com/?apikey=59354c85&i=${movie.imdbID}`)
            .then(res => res.json())
    })
    )
        .then(detailedMovies => {
            console.log(detailedMovies)
            const movieHtmlArray = detailedMovies.map(function (currentMovie) {


                return `
            
            <div class="movie col-4">
            <div class="card" style="width: 18rem;">
            <div>
            <a href="https://www.imdb.com/title/${currentMovie.imdbID}/">
            <img src="${currentMovie.Poster}" class="card-img-top" alt="..." >
            </a>
            </div>
            <div class="card-body">
                <div class="cd-algn">
                <h5 class="card-title">${currentMovie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted movie-1">${currentMovie.Year}</h6>
                </div>
                <p class="card-text">
                <p class="sum">
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMV-${currentMovie.imdbID}" aria-expanded="false" aria-controls="collapseExample">
                    Summary
                    </button>
                </p>
                <div class="collapse" id="collapseMV-${currentMovie.imdbID}" >
                    <div class="card card-body">
                    ${currentMovie.Plot}
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
        })


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
        .then(function (data) {
            renderMovies(data.Search)
            movieData = data.Search
        })
    myForm.reset()

})


const addButton = document.querySelector('.add-button')
document.addEventListener('click', function (event) {
    if (event.target.contains(addButton)) {
        const movieID = event.target.dataset.imdbid

    }
})
function saveToWatchlist(movieID) {
    console.log(movieID)
    const movie = movieData.find(function (currentMovie) {
        return currentMovie.imdbID == movieID
    })
    let watchlistJSON = localStorage.getItem('watchlist')
    let watchlist = JSON.parse(watchlistJSON)
    if (!watchlist) {
        watchlist = []
    }
    watchlist.push(movie)
    watchlistJSON = JSON.stringify(watchlist)
    localStorage.setItem('watchlist', watchlistJSON)
}


