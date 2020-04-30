const table = document.querySelector('tbody');

// Declares a function to save movies to watchlist

function saveToWatchlist(imdbID){
    let movie = movieData.find((currentMovie) => currentMovie.imdbID == imdbID);
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);

    if (watchlist == null){
        watchlist = [];
    }

    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}

// Allows movies to render to the DOM on submit

document.addEventListener('DOMContentLoaded', function (){    
    function renderMovies(movieArray) {
        let movieHTMLArray = movieArray.map(function(currentMovie){
            return `
            <tr>
            <th scope="row" class="pl-5 pr-5 ml-3 mr-3"></th>
            <td><img src=${currentMovie.Poster} height="200" width="150" alt="${currentMovie.Title}" class="ml-3 mr-3"></td>
            <td class="pl-5 pr-5 ml-3 mr-3">${currentMovie.Title}</td>
            <td class="pl-5 pr-5 ml-3 mr-3">${currentMovie.Year}</td>
            <td class="pl-5 pr-5 ml-3 mr-3"><button onclick="saveToWatchlist('${currentMovie.imdbID}')" class=" btn btn-light">Add</button></td>
          </tr>
            `
        });
        return movieHTMLArray.join(``);
    }
    const myForm = document.getElementById('search-form');
    myForm.addEventListener('submit', function(e){
        e.preventDefault();
        table.innerHTML = renderMovies(movieData);
    });
    
    // table.innerHTML = renderMovies(movieData);
});




