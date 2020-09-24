import { getMovies } from '../utils/API'
import { BASE_API_MOVIES, searchForm, $featuringTitle, $featuringContainer } from '../utils/vars'
import { createTemplate, templateSearchResults } from '../utils/templates'
import { renderFeaturingMovie } from '../utils/renders'

export const search = async (keyword, $container) => {
  $container.classList.add('active')
  const moviesSearch = await getMovies(`${BASE_API_MOVIES}/list_movies.json?query_term=${keyword}`)
  const ul = document.createElement('ul')
  $container.append(ul)
  dataSearch(moviesSearch, $container, ul)
}

const dataSearch = (data, $container, element) => {
  try {
    data.forEach(movie => {
      const HTMLString = templateSearchResults(movie)
      const movieElement = createTemplate(HTMLString)
      element.append(movieElement)
      movieElement.addEventListener('click', () => {
        searchMovieEvent($container, movieElement)
      })
    })
  } catch(err) {
    $container.innerHTML = `<ul><li>Oh! We can't find your movie</li></ul>`
  }
}

const searchMovieEvent = async ($container, movieElement) => {
  $container.classList.remove('active')
  const name = movieElement.dataset.name
  const movieData = await getMovies(`${BASE_API_MOVIES}/list_movies.json?query_term=${name}`)
  $featuringTitle && $featuringTitle.remove()
  $featuringContainer.children[0].remove()
  renderFeaturingMovie(movieData[0])
  searchForm.reset()
  $container.children[0].remove()
}
