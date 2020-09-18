export const createTemplate = HTML => {
  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = HTML
  return html.body.children[0]
}

export const featuringTemplate = (movie, classRating) => {
  const { genres } = movie
  return (
    `
      <div class="featuring__movie">
        <div class="featuring__image">
          <img src="${movie.large_cover_image}" alt="${movie.title}"/>
        </div>
        <div class="featuring__info">
          <h3 class="featuring__movie--title">${movie.title}</h3>
          <p class="featuring__description">${movie.description_full}</p>
          <div class="featuring__extra">
            <div class="featuring__rating">
              <span>Rating</span>
              <span class="featuring__rating--number ${classRating}">${movie.rating}</span>
            </div>
            <div class="featuring__genres">
            </div>
          </div>
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
    <li data-name="${movie.title}">
      ${movie.title}
    </li>
  `
)
