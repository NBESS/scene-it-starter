const $table = $('tbody');
let watchlistJSON = localStorage.getItem('watchlist');
let watchlist = JSON.parse(watchlistJSON);

document.addEventListener('DOMContentLoaded', function (){  
        
    $('.add').text('Remove');

    if (watchlist == null){
        $('caption').text('Watchlist - Your list Is Currently Empty');
    }
});

function renderMovies(movieArray) {
    let movieHTMLArray = movieArray.map(function(currentMovie, index){
    
        return `
        <tr class="watchlist-row">
        <th scope="row" class="pl-5 pr-5 ml-3 mr-3 number">${index + 1}</th>
        <td><img src="${currentMovie.Poster == 'N/A' ? './no_image.png' : currentMovie.Poster}" height="200" width="150" alt="${currentMovie.Title}" class="ml-3 mr-3 movie"></td>
        <td class="pl-5 pr-5 ml-3 mr-3 title">${currentMovie.Title}</td>
        <td class="pl-5 pr-5 ml-3 mr-3 release-dt">${currentMovie.Year}</td>
        <td class="pl-5 pr-5 ml-3 mr-3"><button onclick="removeFromWatchlist('${currentMovie.imdbID}')" class=" btn btn-light remove mt-3">Remove</button></td>
        </tr>
        `  
    });
    
    return movieHTMLArray.join(``);
}
$table.html(renderMovies(watchlist));

// Declares a function to remove movies from watchlist
function removeFromWatchlist(imdbID){

    if (watchlist == []){
        $('caption').text('Watchlist - Your list Is Currently Empty');
    }
    console.log('no errors');
    let movieToRemove = watchlist.find(currentMovie => currentMovie.imdbID == imdbID);
    console.log(movieToRemove);
    console.log(watchlistJSON);
    console.log(watchlist);
    watchlist = watchlist.filter((movie) => {
        return movie.imdbID !== movieToRemove.imdbID;
    })
    console.log(watchlist);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);


    $table.html(renderMovies(watchlist));
    
}





