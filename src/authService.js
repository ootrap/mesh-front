import cookie from 'react-cookie'

export function getCookie (name) {
  return cookie.load(name)
}

export function removeCookie (name) {
  cookie.remove(name)
}

export function signOut () {
  window.sessionStorage.clear()
  cookie.remove('wxToken')
  cookie.remove('wemesh')
}

export function isHold () {
  window.console.log(cookie.load('wxToken'))
  return !!cookie.load('wxToken')
}
