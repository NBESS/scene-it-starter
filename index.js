let table = document.querySelector('tbody');
document.addEventListener('DOMContentLoaded', function (){
    function renderMovies(movieArray) {
        let movieHTMLArray = movieArray.map(function(currentMovie){
            return `
            <tr>
            <th scope="row">1</th>
            <td><img src=${currentMovie.Poster} height="200" width="150" alt="${currentMovie.Title}"></td>
            <td>${currentMovie.Title}</td>
            <td>${currentMovie.Year}</td>
            <td><button class=" btn btn-light">Add</button></td>
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



