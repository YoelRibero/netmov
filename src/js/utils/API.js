export const API = async url => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch(err) {
    console.log(err)
  }
}

const cacheExist = list => {
  const dataExist = window.sessionStorage.getItem(list)
  return JSON.parse(dataExist)
}

export const getMovies = async (url, list = null) => {
  try {
    const cacheData = list && cacheExist(list)
    if (cacheData) {
      return cacheData
    }
    const dataMovies = await API(url)
    const { data: { movies, movie_count } } = await dataMovies
    list && window.sessionStorage.setItem(list, JSON.stringify(movies))
    if (movie_count > 0) {
      return movies || []
    }
  } catch(err) {
    throw new Error('No results found to movies')
  }
}

export const getMovie = async url => {
  try {
    const dataMovie = await API(url)
    const { data: { movie } } = await dataMovie
    return movie || {}
  } catch(err) {
    throw new Error('No results found to movie')
  }
}

export const getUsers = async url => {
  try {
    const cacheData = cacheExist('users')
    if (cacheData) {
      return cacheData
    }
    const { results: users } = await API(url)
    window.sessionStorage.setItem('users', JSON.stringify(users))
    return users || []
  } catch(err) {
    throw new Error('No results found to users')
  }
}
