import '../css/index.css'
import {
  BASE_API_MOVIES,
  BASE_API_USERS,
  $hideModal,
  $overlay,
  $usersContainer,
  searchResults,
  searchForm,
  navbarItem,
} from './utils/vars';
import { getMovies, getUsers } from './utils/API'
import { moviesGenre } from './utils/moviesGenre'
import { renderFeaturingMovie, renderMovieList, renderUsers, renderPlayList } from './utils/renders'
import { hideModal, deleteModalContent } from './components/modal'
import { search } from './components/search'
import { cachePlayList } from './components/playList'
import { navBar } from './components/navbar'

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
  searchForm.addEventListener('submit', async e => {
    e.preventDefault()
    searchResults.children[0] && searchResults.children[0].remove()
    const keyword = searchForm.querySelector('input').value
    search(keyword, searchResults)
  })
  // Playlist
  const myPlayList = cachePlayList()
  renderPlayList(myPlayList)
  // NavBar Mobile
  navbarItem.forEach(item => {
    item.addEventListener('click', () => {
      navBar(item)
    })
  })
})()
