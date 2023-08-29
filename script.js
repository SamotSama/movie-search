const apiKey = "8fa799d9ed64f37163d9d60cfa8dbdda";
const searchButton = document.getElementById("search-button");
const genreFilter = document.getElementById("genre-filter");
const sortBySelect = document.getElementById("sort-by");
const movieList = document.getElementById("movie-list");

searchButton.addEventListener("click", async () => {
  const searchTerm = document.getElementById("search").value;
  const selectedGenre = genreFilter.value;

  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8fa799d9ed64f37163d9d60cfa8dbdda&query=${searchTerm}&with_genres=${selectedGenre}`);
    const data = await response.json();

    movieList.innerHTML = "";

    data.results.forEach(movie => {
      const movieCard = document.createElement("div");
      movieCard.className = "movie-card";

      const movieImage = document.createElement("img");
      movieImage.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      movieImage.alt = movie.title;

      movieCard.appendChild(movieImage);
      movieList.appendChild(movieCard);
    });
  } catch (error) {
    console.error("Error al buscar películas:", error);
  }
});

genreFilter.addEventListener("change", async () => {
    const selectedGenre = genreFilter.value;
  
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8fa799d9ed64f37163d9d60cfa8dbdda&language=en-US&sort_by=popularity.desc&with_genres=${selectedGenre}`);
      const data = await response.json();
  
      movieList.innerHTML = "";
  
      data.results.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";
  
        const movieImage = document.createElement("img");
        movieImage.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        movieImage.alt = movie.title;
  
        movieCard.appendChild(movieImage);
        movieList.appendChild(movieCard);
      });
    } catch (error) {
      console.error("Error al filtrar películas por género:", error);
    }
  });
  

  sortBySelect.addEventListener("change", async () => {
    const selectedSort = sortBySelect.value;
  
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8fa799d9ed64f37163d9d60cfa8dbdda&language=en-US&sort_by=${selectedSort}`);
      const data = await response.json();
  
      movieList.innerHTML = "";
  
      data.results.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";
  
        const movieImage = document.createElement("img");
        movieImage.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        movieImage.alt = movie.title;
  
        movieCard.appendChild(movieImage);
        movieList.appendChild(movieCard);
      });
    } catch (error) {
      console.error("Error al ordenar películas:", error);
    }
  });
  