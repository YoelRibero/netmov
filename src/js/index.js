import '../css/index.css'
import { BASE_API_MOVIES, BASE_API_USERS, $hideModal, $overlay, $usersContainer, $featuringContainer, search, searchResults, $featuringTitle } from './utils/vars'
import { getMovies, getUsers } from './utils/API'
import { moviesGenre } from './utils/moviesGenre'
import { renderFeaturingMovie, renderMovieList, renderUsers } from './utils/renders'
import { hideModal, deleteModalContent } from './components/modal'
import { createTemplate, templateSearchResults } from './utils/templates'

(async function() {
  // Render featuring Movie
  const featuringMovie = await getMovies(`${BASE_API_MOVIES}/list_movies.json?sort=seeds&limit=1`)
  renderFeaturingMovie(featuringMovie[0])
  // Render Movies by genre
  moviesGenre.forEach(async genre => {
    const list = await getMovies(`${BASE_API_MOVIES}/list_movies.json?genre=${genre.category}`)
    renderMovieList(list, genre.container, genre.category)
  })
  // Render Users
  const listUsers = await getUsers(`${BASE_API_USERS}/?results=10`)
  renderUsers(listUsers, $usersContainer)
  // Modal
  $hideModal.addEventListener('click', () => {
    hideModal()
    deleteModalContent()
  })
  $overlay.addEventListener('click', () => {
    hideModal()
    deleteModalContent()
  })
  // Search
  search.addEventListener('submit', async e => {
    e.preventDefault()
    const keyword = search.querySelector('input').value
    searchResults.classList.add('active')
    const moviesSearch = await getMovies(`${BASE_API_MOVIES}/list_movies.json?query_term=${keyword}`)
    const ul = document.createElement('ul')
    searchResults.append(ul)
    try {
      moviesSearch.forEach(movie => {
        const HTMLString = templateSearchResults(movie)
        const movieElement = createTemplate(HTMLString)
        ul.append(movieElement)
        movieElement.addEventListener('click', async () => {
          searchResults.classList.remove('active')
          const name = movieElement.dataset.name
          const movieSearch = await getMovies(`${BASE_API_MOVIES}/list_movies.json?query_term=${name}`)
          $featuringTitle && $featuringTitle.remove()
          $featuringContainer.children[0].remove()
          renderFeaturingMovie(movieSearch[0])
          search.reset()
          searchResults.children[0].remove()
        })
      })
    } catch(err) {
      console.log('oh hubo un error')
      searchResults.innerHTML = `<li>Oh! We can't find your movie</li>`;
    }
  })
})()
