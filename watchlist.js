const $table = $('tbody');

document.addEventListener('DOMContentLoaded', function (){  
    
    const watchlistJSON = localStorage.getItem('watchlist');
    const watchlist = JSON.parse(watchlistJSON);

    if (watchlist == null){
        $('caption').text('Watchlist - Your list Is Currently Empty');
    }

    function renderMovies(movieArray) {
        let movieHTMLArray = movieArray.map(function(currentMovie, index){
            return `
            <tr>
            <th scope="row" class="pl-5 pr-5 ml-3 mr-3">${index + 1}</th>
            <td><img src="${currentMovie.Poster == 'N/A' ? './no_image.png' : currentMovie.Poster}" height="200" width="150" alt="${currentMovie.Title}" class="ml-3 mr-3"></td>
            <td class="pl-5 pr-5 ml-3 mr-3">${currentMovie.Title}</td>
            <td class="pl-5 pr-5 ml-3 mr-3">${currentMovie.Year}</td>
            <td class="pl-5 pr-5 ml-3 mr-3"><button onclick="saveToWatchlist('${currentMovie.imdbID}')" class=" btn btn-light">Add</button></td>
          </tr>
            `
        });
        return movieHTMLArray.join(``);
    }
    $table.html(renderMovies(watchlist));
});

