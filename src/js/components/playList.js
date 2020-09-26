import { getMovie } from '../utils/API'
import { BASE_API_MOVIES, playListContainer } from '../utils/vars'
import { renderPlayList } from '../utils/renders'

export const cachePlayList = () => {
  const playListCache = window.localStorage.getItem('playList')
  const data = playListCache ? JSON.parse(playListCache) : []
  return data
}

let myPlayList = cachePlayList()

export const addPlayList = async (movieId) => {
  if (myPlayList.length <= 10) {
    const movie = await getMovie(`${BASE_API_MOVIES}/movie_details.json?movie_id=${movieId}`)
    myPlayList.push(movie)
    window.localStorage.setItem('playList', JSON.stringify(myPlayList))
    myPlayList.length > 0 && playListContainer.children[0].remove()
    renderPlayList(myPlayList)
  } else {
    alert("You can't add beyond ten movies to playList")
  }
}

export const deleteItemPlaylist = (movieId) => {
  myPlayList = myPlayList.filter(movie => Number(movie.id) !== Number(movieId))
  window.localStorage.setItem('playList', JSON.stringify(myPlayList))
  playListContainer.children[0].remove()
  renderPlayList(myPlayList)
}
