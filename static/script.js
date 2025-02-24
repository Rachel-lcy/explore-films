const movies = [
  {
    title:'Inception',
    language: 'English',
    genre: 'Science Fiction',
    releaseDate: '2010-2024',
    image:'./assets/inception.jpg',
    movieType:"Poster"
  },
  {
    title:'Interstellar',
    language: 'English',
    genre: 'Science Fiction',
    releaseDate: '2010-2024',
    image:'./assets/interstellar.jpg',
    movieType:"Poster"
  },
  {
    title:'Iron-man',
    language: 'English',
    genre: 'Action',
    releaseDate: '2010-2024',
    image:'./assets/Iron-man.jpg',
    movieType:"Poster"
  },
  {
    title:'Deadpool',
    language: 'English',
    genre: 'Comedy',
    releaseDate: '2010-2024',
    image:'./assets/deadpool.jpg',
    movieType:"Poster"
  },
  {
    title:'Amelie',
    language: 'French',
    genre: 'Romance',
    releaseDate: '2000-2010',
    image:'./assets/amelie.jpg',
    movieType:"Poster"
  },
  {
    title:'Thor',
    language: 'English',
    genre: 'Fantasy',
    releaseDate: '2000-2010',
    image:'./assets/Thor.jpg',
    movieType:"Poster"
  },
  {
    title:'Captain America',
    language: 'English',
    genre: 'Adventure',
    releaseDate: '2010-2024',
    image:'./assets/Captain America.jpg',
    movieType:"Poster"
  },
  {
    title:'Pride and Prejudice',
    language: 'English',
    genre: 'Romance',
    releaseDate: '2000-2010',
    image:'./assets/Pride and Prejudice.jpg',
    movieType:"video"
  },

];

const languageSelect = document.getElementById('language-select');
const genreSelect = document.getElementById("genre-select");
const releaseSelect = document.getElementById("release-select");
const movieTypeSelect = document.getElementById("movie-type");

const moviesContainer = document.getElementById("movies-container");

languageSelect.addEventListener("change",filterMovies);
genreSelect.addEventListener("change",filterMovies);
releaseSelect.addEventListener("change", filterMovies);
movieTypeSelect.addEventListener("change",filterMovies);


window.onload = function(){
  filterMovies();
}

function filterMovies(){
  const selectedLanguage = languageSelect.value;
  const selectedGenre = genreSelect.value;
  const selectedRelease = releaseSelect.value;
  const selectedType = movieTypeSelect.value;
  const  moviesResultList = [];
  for(let i = 0 ; i < movies.length ; i++){
    if(
      (selectedLanguage === "all" || movies[i].language === selectedLanguage) &&
      (selectedGenre=== "all" || movies[i].genre === selectedGenre) &&
      (selectedRelease === "all" ||  movies[i].releaseDate === selectedRelease) &&
      (selectedType === "all" || movies[i].movieType === selectedType )
    ){
        moviesResultList.push(movies[i]);
    }
  }
  console.log(moviesResultList);
  renderMovies(moviesResultList);
}

function  renderMovies(moviesResultList){
  moviesContainer.innerHTML = "";
  if(moviesResultList.length  < 1){
    moviesContainer.innerHTML =  "<p>No movies found</p>";
    return;
  }
  moviesResultList.forEach(movie => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    let mediaContent = "";

    if(movie.movieType === "video") {
      mediaContent = `
      <iframe width="100%" height="315"
        src="https://www.youtube.com/embed/Ur_DIHs92NM"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
        </iframe>
      `;
    } else{
      mediaContent = `<img src="${movie.image}" alt="${movie.title}">`;
    }

    movieElement.innerHTML = `
      ${mediaContent}
      <p>Title: ${movie.title}</p>
      <p>Genre: ${movie.genre}</p>
      <p>Language: ${movie.language}</p>
      <p>Release: ${movie.releaseDate}</p>
      <p>Type: ${movie.movieType}</p>
    `;

    moviesContainer.appendChild(movieElement);
  });

}