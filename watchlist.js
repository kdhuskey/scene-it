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
                <!-- flex start at the beginning or maybe it's float-end... -->
                <button class="btn btn-primary remove-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMV-${currentMovie.imdbID}" aria-expanded="false" aria-controls="collapseExample">
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
let watchlistJSON = localStorage.getItem('watchlist')
    let watchlist = JSON.parse(watchlistJSON)
    renderMovies(watchlist)

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn')) {
            console.log('yay..')
            const movieID = e.target.dataset.imdbid
            localStorage.removeItem('watchlist')
            
        }
    })
