document.addEventListener('DOMContentLoaded', function() {
    const moviesList = document.getElementById('movies-list');
    const searchForm = document.getElementById('search-form');
    const randomMovieBtn = document.getElementById('random-movie');
    const saveForm = document.getElementById('save-form');
    const updateMoviesBtn = document.getElementById('update-movies');

    // Function to fetch all movies and display them
    function fetchAllMovies() {
        fetch('https://isedt.dev/mssc-brewery/api/v1/pelis')
            .then(response => response.json())
            .then(data => {
                moviesList.innerHTML = ''; // Clear previous list
                data.forEach(movie => {
                    moviesList.innerHTML += `<div>${movie.nombre}</div>`;
                });
            })
            .catch(error => console.error('Error fetching movies:', error));
    }

    // Fetch all movies initially
    fetchAllMovies();

    // Search movie by name
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const movieName = document.getElementById('movie-name').value;
        fetch(`https://isedt.dev/mssc-brewery/api/v1/pelis/peliByName?nombre=${movieName}`)
            .then(response => response.json())
            .then(data => {
                moviesList.innerHTML = `<div>${data.nombre}</div>`;
            })
            .catch(error => console.error('Error searching movie by name:', error));
    });

    // Fetch random movie
    randomMovieBtn.addEventListener('click', function() {
        const pass = document.getElementById('random-pass').value; // Get password input
        fetch(`https://isedt.dev/mssc-brewery/api/v1/pelis/randomPeli?pass=${pass}`, { // Adjusted URL for randomPeli endpoint
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && data.nombre) {
                    moviesList.innerHTML = `<div>${data.nombre}</div>`;
                } else {
                    moviesList.innerHTML = 'No random movie found.';
                }
            })
            .catch(error => console.error('Error fetching random movie:', error));
    });

    // Handle form submission for saving a new movie
    saveForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const movieName = document.getElementById('new-movie-name').value;
        const pass = document.getElementById('save-pass').value;
        const formData = {
            nombre: movieName
        };

        fetch(`https://isedt.dev/mssc-brewery/api/v1/pelis/savePeli?pass=${pass}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to save movie');
            }
            fetchAllMovies(); // Refresh the movies list after successful save
            saveForm.reset(); // Clear the form fields
        })
        .catch(error => console.error('Error saving movie:', error));
    });

    // Handle click on "Update List" button
    updateMoviesBtn.addEventListener('click', function() {
        fetchAllMovies();
    });    
});
