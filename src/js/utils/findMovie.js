import { getMovies } from './API'
import { BASE_API_MOVIES } from './vars'

export const findMovie = async (id, category) => {
  const data = await getMovies(`${BASE_API_MOVIES}/list_movies.json?genre=${category}`, category)
  const movie = data.find(movie => movie.id === Number(id))
  return movie
}
