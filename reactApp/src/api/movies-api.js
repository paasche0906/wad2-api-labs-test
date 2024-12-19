export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=31af661a7adcb32ae044337494e0f685&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };