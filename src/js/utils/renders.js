import { $featuringContainer, $featuringTitle } from './vars'
import { createTemplate, featuringTemplate, movieTemplate, usersTemplate } from '../utils/templates'
import { findMovie } from './findMovie'

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
  listUsers.forEach(user => {
    // Generate number random for know if user is connected
    let connected;
    const random = Math.random()
    random > 0.5 ? connected = 'connected' : connected = null
    const HTMLString = usersTemplate(user, connected)
    const userElement = createTemplate(HTMLString)
    $container.append(userElement)
  })
  $container.children[0].remove()
}

export const renderFeaturingMovie = movie => {
  console.log(movie)
  const { background_image_original: backgroundMovie, genres } = movie
  backgroundMovie && document.querySelector('.content__background img').setAttribute('src', backgroundMovie)
  // Evalue class of rating
  let classRating
  if (movie.rating <= 3) {
    classRating = 'bad'
  } else if (movie.rating > 3 && movie.rating < 7) {
    classRating = 'warning'
  } else {
    classRating = 'success'
  }
  const HTMLString = featuringTemplate(movie, classRating)
  const movieElement = createTemplate(HTMLString)
  $featuringContainer.append(movieElement)
  const genresContainer = document.querySelector('.featuring__genres')
  console.log(genresContainer)
  genres.length > 0 && genres.forEach((genre, index) => {
    const templateGenre = genres.length === index + 1 ? `<span>${genre}</span>` : `<span>${genre},</span>`
    const genreElement = createTemplate(templateGenre)
    genresContainer.append(genreElement)
  })
}
