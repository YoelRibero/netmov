import { navbarItem, sidebarLeft, sidebarRigth, navbarItemHome, $overlay } from '../utils/vars'

export const navBar = item => {
  navbarItem.forEach(item => {
    item.classList.contains('active') && item.classList.remove('active') // Check if it can be improved
  })
  !item.classList.contains('active') && item.classList.add('active')
  const itemName = item.dataset.nav
  navEvalue(item, itemName)
}

const navEvalue = (item, itemName) => {
  switch (itemName) {
    case 'playlist':
      sidebarRigth.classList.contains('show') && sidebarRigth.classList.remove('show')
      sidebarLeft.classList.toggle('show')
      !sidebarLeft.classList.contains('show') ? item.classList.remove('active') - navbarItemHome.classList.add('active') - $overlay.classList.remove('active') : $overlay.classList.add('active')
      break
    case 'user':
      sidebarLeft.classList.contains('show') && sidebarLeft.classList.remove('show')
      sidebarRigth.classList.toggle('show')
      !sidebarRigth.classList.contains('show') ? item.classList.remove('active') - navbarItemHome.classList.add('active') - $overlay.classList.remove('active') : $overlay.classList.add('active')
      break
    case 'home':
      sidebarLeft.classList.contains('show') && sidebarLeft.classList.remove('show')
      sidebarRigth.classList.contains('show') && sidebarRigth.classList.remove('show')
      break
  }
}
