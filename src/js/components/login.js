import { cacheExist } from '../utils/API'
import { loginContainer, mainUser, userNameInput, userSocialInput } from '../utils/vars'
import logout from '../../images/logout.svg'

export const login = () => {
  const dataUser = cacheExist('user')
  if (dataUser) {
    loginContainer.remove()
    mainUser.classList.add('connected')
    mainUser.querySelector('.user__name').textContent = dataUser.userName
    mainUser.querySelector('.user__social').textContent = dataUser.userSocial
    createImageLogOut(mainUser)
  }
}

export const handleSubmit = (form) => {
  if (userNameInput.value !== '' && userSocialInput.value !== '') {
    const user = {
      userName: userNameInput.value,
      userSocial: userSocialInput.value
    }
    window.sessionStorage.setItem('user', JSON.stringify(user))
    form.reset()
    window.location.reload()
  } else {
    alert('The field "User Name" and the field "Social Network" must contain something')
  }
}

const createImageLogOut = $container => {
  const img = document.createElement('img')
  img.src = logout
  img.alt = 'Icon LogOut'
  img.classList.add('user__icon')
  $container.append(img)
  img.addEventListener('click', () => {
    logOut()
  })
}

const logOut = () => {
  window.sessionStorage.removeItem('user')
  window.location.reload()
}
