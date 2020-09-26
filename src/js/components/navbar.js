import { navbarItem, sidebarLeft, sidebarRigth } from '../utils/vars'

export const navBar = item => {
  navbarItem.forEach(item => {
    item.classList.contains('active') && item.classList.remove('active') // Check if it can be improved
  })
  !item.classList.contains('active') && item.classList.add('active')
  const itemName = item.dataset.nav
  switch (itemName) {
    case 'playlist':
      sidebarRigth.classList.contains('show') && sidebarRigth.classList.remove('show')
      sidebarLeft.classList.add('show')
      break
    case 'user':
      sidebarLeft.classList.contains('show') && sidebarLeft.classList.remove('show')
      sidebarRigth.classList.add('show')
      break
    case 'home':
      sidebarLeft.classList.contains('show') && sidebarLeft.classList.remove('show')
      sidebarRigth.classList.contains('show') && sidebarRigth.classList.remove('show')
      break
  }
}
