import '../css/index.css'
import {
  BASE_API_MOVIES,
  BASE_API_USERS,
  $usersContainer,
  searchResults,
  searchForm,
  navbarItem,
  loginForm,
} from './utils/vars';
import { getMovies, getUsers } from './utils/API'
import { moviesGenre } from './utils/moviesGenre'
import { renderFeaturingMovie, renderMovieList, renderUsers, renderPlayList } from './utils/renders'
import { search } from './components/search'
import { cachePlayList } from './components/playList'
import { navBar } from './components/navbar'
import { login, handleSubmit } from './components/login'

(async function() {
  // Render featuring Movie
  const featuringMovie = await getMovies(`${BASE_API_MOVIES}/list_movies.json?sort=seeds&limit=1`, 'featuring')
  renderFeaturingMovie(featuringMovie[0])
  // Render Movies by genre
  moviesGenre.forEach(async genre => {
    const list = await getMovies(`${BASE_API_MOVIES}/list_movies.json?genre=${genre.category}`, genre.category)
    renderMovieList(list, genre.container, genre.category)
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
  // Login
  login()
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    handleSubmit(loginForm)
  })
  // Search
  searchForm.addEventListener('submit', async e => {
    e.preventDefault()
    searchResults.children[0] && searchResults.children[0].remove()
    const keyword = searchForm.querySelector('input').value
    search(keyword, searchResults)
  })
  // Render Users
  const listUsers = await getUsers(`${BASE_API_USERS}/?results=10`)
  renderUsers(listUsers, $usersContainer)
  // Validation link to index.html
  window.location.href.indexOf('localhost') > - 1 ? null : document.querySelector('.nav__item.selected a').setAttribute('href', 'https://yoelribero.github.io/netmov/dist/')
})()
