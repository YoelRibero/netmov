import iconPlay from '../../images/play.svg'
import iconStarEmpty from '../../images/star-empty.svg'
import iconStar from '../../images/star.svg'
import iconDelete from '../../images/delete.svg'
import notFoundImage from '../../images/not-found-image.jpg'

export const createTemplate = HTML => {
  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = HTML
  return html.body.children[0]
}

export const featuringTemplate = (movie, classRating, favorite = false) => {
  const {
    large_cover_image,
    title,
    year,
    runtime,
    rating,
    yt_trailer_code,
    id,
    description_full,
  } = movie
  return (
    `
      <div class="featuring__movie">
        <div class="featuring__image">
          <img src="${large_cover_image ? large_cover_image : notFoundImage}" alt="${title}" onerror="this.onerror=null;this.src='${notFoundImage}';"/>
        </div>
        <div class="featuring__info">
          <h3 class="featuring__movie--title">${title} <span>(${year})</span></h3>
          <div class="featuring__summary">
            <span class="featuring__genres"></span>
            <span class="featuring__time">${runtime} min</span>
          </div>
          <div class="featuring__extra">
            <div class="featuring__rating">
              <span class="featuring__rating--number ${classRating}">${rating * 10}%</span>
            </div>
            <div class="featuring__extra--link">
              <a href="https://www.youtube.com/watch?v=${yt_trailer_code}" target="_blank">
                <img src="${iconPlay}" alt="Icon Play"/>
              </a>
            </div>
            <div class="featuring__extra--link">
              <a data-id="${id}" id="add-to-fav">
                <img src="${favorite ? iconStar : iconStarEmpty}" alt="Icon Star"/>
              </a>
            </div>
          </div>
          <p class="featuring__description">${description_full}</p>
        </div>
      </div>
    `
  )
}

export const movieTemplate = (movie, category) => {
  const { id, title, year, medium_cover_image } = movie;
  return (
    `
      <div class="movies__list--item" data-id="${id}" data-category="${category}">
        <div class="movies__list--image">
          <img src="${medium_cover_image ? medium_cover_image : notFoundImage}" onerror="this.onerror=null;this.src='${notFoundImage}';">
        </div>
        <h4 class="movies__list--item-title">
          ${title}
        </h4>
        <p class="movies__list--date">${year}</p>
      </div>
    `
  )
}

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

export const templateSearchResults = movie => {
  const { id, title } = movie
  return (
    `
      <li data-id="${id}">
        ${title}
      </li>
    `
  )
}

export const templatePlayList = movie => {
  const { small_cover_image, title, id } = movie;
  return(
    `
      <li class="playList__content">
        <div class="playList__info">
          <img src="${small_cover_image ? small_cover_image : notFoundImage}" alt="${title}" onerror="this.onerror=null;this.src='${notFoundImage}';"/>
          <h4 class="playList__title">${title}</h4> 
        </div>
        <span class="playList__deleted" data-deleted="${id}">
          <img src="${iconDelete}" alt="Icon Deleted" />
        </span>
      </li>
    `
  )
}
