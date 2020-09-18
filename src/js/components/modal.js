import { BASE_API_MOVIES, $overlay, $modal, $modalContent } from '../utils/vars'
import { getMovies } from '../utils/API'
import { createTemplate, movieModalTemplate } from '../utils/templates'

export const showModal = () => {
  $overlay.classList.add('active')
  $modal.style.animation = 'modalIn .8s forwards'
}

export const hideModal = () => {
  $overlay.classList.remove('active')
  $modal.style.animation = 'modalOut .8s forwards'
}

export const modalContentMovie = async $element => {
  const id = $element.dataset.id
  const category = $element.dataset.category
  const data = await getMovies(`${BASE_API_MOVIES}/list_movies.json?genre=${category}`)
  const movie = data.find(item => item.id === Number(id))
  const HTMLString = movieModalTemplate(movie)
  const movieTemplate = createTemplate(HTMLString)
  $modalContent.appendChild(movieTemplate)
  $modal.style.backgroundImage = `url(${movie.background_image})`
}

export const deleteModalContent = () => {
  setTimeout(() => {
    $modalContent.innerHTML = ''
    $modal.style.backgroundImage = `url()`
  }, 1000)
}
