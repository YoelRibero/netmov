import { $featuringContainer, $featuringTitle, playListContainer } from './vars'
import { createTemplate, featuringTemplate, movieTemplate, usersTemplate, templatePlayList } from '../utils/templates'
import { printGenres } from './moviesGenre'
import { userStatus } from './user'
import { findMovie } from './findMovie'
import { classRating } from './classRating'
import { addPlayList, deleteItemPlaylist } from '../components/playList'

export const renderMovieList = (list, $container, category) => {
  $container.children[0].remove()
  $container.classList.add('movies')
  list.forEach(movie => {
    const HTMLString = movieTemplate(movie, category)
    const movieElement = createTemplate(HTMLString)
    $container.append(movieElement)
    movieElement.addEventListener('click', async () => {
      const elementSelected = document.querySelector('.movies__list--item.selected')
      elementSelected && elementSelected.classList.remove('selected')
      movieElement.classList.add('selected')
      const movie = await findMovie(movieElement.dataset.id, movieElement.dataset.category)
      $featuringTitle && $featuringTitle.remove()
      $featuringContainer.children[0].remove()
      renderFeaturingMovie(movie)
    })
  })
}

export const renderUsers = (listUsers, $container) => {
  listUsers ? listUsers.forEach(user => {
    // Generate number random for know if user is connected
    const connected = userStatus()
    const HTMLString = usersTemplate(user, connected)
    const userElement = createTemplate(HTMLString)
    $container.append(userElement)
  }) : $container.textContent = "We can't get your user list"
  $container.children[0].remove()
}

export const renderFeaturingMovie = movie => {
  const { background_image_original: backgroundMovie, genres } = movie
  backgroundMovie && document.querySelector('.content__background img').setAttribute('src', backgroundMovie)
  // Evalue class of rating
  const classExport = classRating(movie.rating)
  // Featuring Template
  const HTMLString = featuringTemplate(movie, classExport)
  const movieElement = createTemplate(HTMLString)
  $featuringContainer.appendChild(movieElement)
  // Add genres to markup
  const genresContainer = document.querySelector('.featuring__genres')
  printGenres(genresContainer, genres)
  // Add to PlayList
  const addPlayListButton = document.getElementById('add-to-fav')
  addPlayListButton.addEventListener('click', () => {
    addPlayList(addPlayListButton.dataset.id)
  })
}

export const renderPlayList = list => {
  const ul = document.createElement('ul')
  playListContainer.append(ul)
  list.forEach(movie => {
    const HTMLString = templatePlayList(movie)
    const playListElement = createTemplate(HTMLString)
    ul.append(playListElement)
    const movieDeleted = playListElement.querySelector('.playList__deleted')
    movieDeleted.addEventListener('click', () => {
      deleteItemPlaylist(movieDeleted.dataset.deleted)
    })
  })
}
