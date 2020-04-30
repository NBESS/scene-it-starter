document.addEventListener('DOMContentLoaded', function (){  
    localStorage.getItem('watchlist');
    function renderMovies(movieArray) {
        let movieHTMLArray = movieArray.map(function(currentMovie){
            return `
            <tr>
            <th scope="row" class="pl-5 pr-5 ml-3 mr-3">1</th>
            <td><img src=${currentMovie.Poster} height="200" width="150" alt="${currentMovie.Title}" class="ml-3 mr-3"></td>
            <td class="pl-5 pr-5 ml-3 mr-3">${currentMovie.Title}</td>
            <td class="pl-5 pr-5 ml-3 mr-3">${currentMovie.Year}</td>
            <td class="pl-5 pr-5 ml-3 mr-3"><button onclick="saveToWatchlist('${currentMovie.imdbID}')" class=" btn btn-light">Add</button></td>
          </tr>
            `
        });
        return movieHTMLArray.join(``);
    }
    table.innerHTML = renderMovies(watchlist);
    
    // table.innerHTML = renderMovies(movieData);
});