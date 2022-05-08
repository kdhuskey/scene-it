// let watchlist = JSON.parse(localStorage.getItem('watchlist'))
let watchlistJSON = localStorage.getItem('watchlist')
let watchlist = JSON.parse(watchlistJSON)
console.log(watchlist)
function renderMovies(movies) {


    const movieHtmlArray = movies.map(function (currentMovie) {

        return `
        
        <div class="movie col-4 spz">
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
                <button class="btn btn-primary remove-btn" type="button" data-bs-toggle="collapse" data-imdbid=${currentMovie.imdbID} aria-expanded="false" aria-controls="collapseExample">
                Remove
                </button>
            </p>
            </p>
            
        </div>
        </div>
        </div>
    
        `
    })


    const results = document.querySelector('#results')
    results.innerHTML = movieHtmlArray.join('')
}

    renderMovies(watchlist)

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn')) {
            const movieID = e.target.dataset.imdbid
            watchlist=watchlist.filter(movie => {
                if (movieID === movie.imdbID){
                    return false
                }
                else return true
                
            })
            watchlistJSON = JSON.stringify(watchlist)
            localStorage.setItem('watchlist', watchlistJSON)
            renderMovies(watchlist)
        }
    })
