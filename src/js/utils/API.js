export const API = async url => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch(err) {
    console.log(err)
  }
}

export const getMovies = async url => {
  try {
    const dataMovies = await API(url)
    const { data: { movies, movie_count } } = await dataMovies
    if (movie_count > 0) {
      return movies
    }
  } catch(err) {
    throw new Error('No se encontró ningún resultado')
  }
}

export const getUsers = async url => {
  try {
    const { results: users } = await API(url)
    return users
  } catch(err) {
    console.log(err)
  }
}
