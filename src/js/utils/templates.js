import iconPlay from '../../images/play.svg'
import iconStarEmpty from '../../images/star-empty.svg'
import iconStar from '../../images/star.svg'
import iconDelete from '../../images/delete.svg'

export const createTemplate = HTML => {
  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = HTML
  return html.body.children[0]
}

export const featuringTemplate = (movie, classRating, favorite = false) => {
  return (
    `
      <div class="featuring__movie">
        <div class="featuring__image">
          <img src="${movie.large_cover_image}" alt="${movie.title}"/>
        </div>
        <div class="featuring__info">
          <h3 class="featuring__movie--title">${movie.title} <span>(${movie.year})</span></h3>
          <div class="featuring__summary">
            <span class="featuring__genres"></span>
            <span class="featuring__time">${movie.runtime} min</span>
          </div>
          <div class="featuring__extra">
            <div class="featuring__rating">
              <span class="featuring__rating--number ${classRating}">${movie.rating * 10}%</span>
            </div>
            <div class="featuring__extra--link">
              <a href="https://www.youtube.com/watch?v=${movie.yt_trailer_code}" target="_blank">
                <img src="${iconPlay}" alt="Icon Play"/>
              </a>
            </div>
            <div class="featuring__extra--link">
              <a data-id="${movie.id}" id="add-to-fav">
                <img src="${favorite ? iconStar : iconStarEmpty}" alt="Icon Star"/>
              </a>
            </div>
          </div>
          <p class="featuring__description">${movie.description_full}</p>
        </div>
      </div>
    `
  )
}

export const movieTemplate = (movie, category) => (
  `
    <div class="movies__list--item" data-id="${movie.id}" data-category="${category}">
      <div class="movies__list--image">
        <img src="${movie.medium_cover_image}">
      </div>
      <h4 class="movies__list--item-title">
        ${movie.title}
      </h4>
      <p class="movies__list--date">${movie.year}</p>
    </div>
  `
)

export const usersTemplate = (user, connected) => {
  const { name: { first, last }, login: { username }, picture: { thumbnail } } = user
  return `
    <section class="user ${connected}">
      <figure class="user__image">
        <img src="${thumbnail}" alt="User Avatar">
      </figure>
      <div class="user__info">
        <span class="user__name">${first} ${last}</span>
        <span class="user__social">@${username}</span>
      </div>
    </section>
  `
}

export const movieModalTemplate = movie => {
  return (
    ` <div class="modal-content-container">
      <img src="${movie.medium_cover_image}" alt="${movie.title}"/>
      <div class="modal-content-info">
        <h1>${movie.title}</h1>
        <p>${movie.description_full}</p>
        <div>
          <b>Rating</b>
          <span class="rating__number ${classRating}">${movie.rating}</span>
        </div>
      </div>
    </div>`
  )
}

export const playlistMovieTemplate = movie => (
  `
    <li class="myPlaylist-item" data-id="${movie.id}">
      <a href="#">
        <span>
          ${movie.title}
        </span>
      </a>
    </li>
  `
)

export const templateSearchResults = movie => (
  `
    <li data-id="${movie.id}">
      ${movie.title}
    </li>
  `
)

export const templatePlayList = movie => (
  `
    <li class="playList__content">
      <div class="playList__info">
        <img src="${movie.small_cover_image}" alt="${movie.title}"/>
        <h4 class="playList__title">${movie.title}</h4> 
      </div>
      <span class="playList__deleted" data-deleted="${movie.id}">
        <img src="${iconDelete}" alt="Icon Deleted" />
      </span>
    </li>
  `
)
