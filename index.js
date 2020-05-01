const $table = $('tbody');

// Declares a function to save movies to watchlist

function saveToWatchlist(imdbID){
    let movie = movieData.find(currentMovie => currentMovie.imdbID == imdbID);
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
        let movieHTMLArray = movieArray.map(function(currentMovie, index){
            return `
            <tr>
            <th scope="row" class="pl-5 pr-5 ml-3 mr-3 number">${index + 1}</th>
            <td><img src="${currentMovie.Poster == 'N/A' ? './no_image.png' : currentMovie.Poster}" height="200" width="150" alt="${currentMovie.Title}" class="ml-3 mr-3 movie"></td>
            <td class="pl-5 pr-5 ml-3 mr-3 title">${currentMovie.Title}</td>
            <td class="pl-5 pr-5 ml-3 mr-3 release-dt">${currentMovie.Year}</td>
            <td class="pl-5 pr-5 ml-3 mr-3"><button onclick="saveToWatchlist('${currentMovie.imdbID}')" class=" btn btn-light add">Add</button></td>
          </tr>
            `
        });
        return movieHTMLArray.join(``);
    }
    
    const $myForm = $('#search-form');

    $myForm.on('submit', function(e){
        e.preventDefault();
        
        let $searchString = $('.search-bar').val();
        let urlEncodedSearchString = encodeURIComponent($searchString);
        let movieObject = "https://www.omdbapi.com/?apikey=b43843a0&s=" + urlEncodedSearchString;

        $.get(movieObject).then((data) => {
            $table.html(renderMovies(data.Search));
            movieData = data.Search;
        });
        
    });
    
});




