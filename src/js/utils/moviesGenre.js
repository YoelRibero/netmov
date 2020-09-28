import { $dramaContainer, $actionContainer, $comedyContainer, $animationContainer } from '../utils/vars'
import { createTemplate } from './templates'

export const moviesGenre = [
  {
    category: 'action',
    container: $actionContainer,
  },
  {
    category: 'drama',
    container: $dramaContainer,
  },
  {
    category: 'comedy',
    container: $comedyContainer,
  },
  {
    category: 'animation',
    container: $animationContainer,
  }
]

export const  printGenres = ($container, genres) => {
  genres.length > 0 && genres.forEach(genre => {
    const templateGenre = genres[genres.length - 1] === genre ? `<span>${genre}</span>` : `<span>${genre},</span>`
    const genreElement = createTemplate(templateGenre)
    $container.append(genreElement)
  })
}
