import * as utils from '../utils'
import api from '../api'
import { signOut, getCookie } from '../authService'
import * as types from './types'
var swal = require('sweetalert')
export const fullscreen = ({ dispatch }) => {
  dispatch(types.TOGGLE_FULLSCREEN)
  utils.fullscreen()
}

export const showToast = ({dispatch}, content, type = 'error') => {
  dispatch(types.SHOW_TOAST, {content: content, type: type})
}

export const hideToast = ({dispatch}) => {
  dispatch(types.HIDE_TOAST)
}

export const logout = ({dispatch, router}) => {
  signOut()
  router.go({path: '/'})
  dispatch(types.LOGOUT)
}

/**
 * 获取用户信息(包括菜单 消息等)
 */
export const getUserInfo = ({dispatch, router}, id) => {
  if (window.sessionStorage.getItem('wemesh.userInfo') === null) {
    makeUserInfo(id)
  } else {
    let json = JSON.parse(window.sessionStorage.getItem('wemesh.userInfo'))
    dispatch(types.GET_USER_INFO, {
      userInfo: json
    })
    router.go({name: 'home'})
    // return true
  }
}

/*
更新用户信息(包括菜单 消息等)
 */
export const updateUserInfo = ({dispatch, router}, weid) => {
  makeUserInfo({dispatch, router}, weid)
  makeCookie({dispatch}, weid)
}

/**
 * 获取公众号信息
 */
export const getWxmpList = ({dispatch}) => {
  api.getWxmpList().then(response => {
    dispatch(types.GET_WXMP_LIST, {wxmpList: response.data})
  }, response => {
    return swal('发生错误', response.data, 'error')
  })
}

export const deleteWxmp = ({dispatch, router}, id) => {
  swal({
    title: '确定删除数据吗？',
    text: '该操作不会影响您的公众号数据，但在微脉事中的数据会被删除',
    type: 'error',
    showCancelButton: true,
    confirmButtonColor: '#DD6B55',
    cancelButtonText: '算了，留着吧',
    confirmButtonText: '是的，我要删除'
  }, function () {
    api.deleteWxmp(id).then(response => {
      window.location.reload()
    }, response => {
      return swal('发生错误', response.statusText, 'error')
    })
  })
}

export const getWxToken = ({dispatch}, weid) => {
  if (getCookie('wxToken') === undefined) {
    makeCookie({dispatch}, weid)
  }
  return getCookie('wxToken')
}

function makeCookie ({dispatch}, weid) {
  api.getWxToken(weid).then(response => {
    document.cookie = 'wxToken=' + response.data.token + ';expires=' + new Date(response.data.expires).toUTCString()
    dispatch(types.GET_WXTOKEN)
  }, response => {
    return swal('发生错误', response.statusText, 'error')
  })
}

function makeUserInfo ({dispatch, router}, id) {
  api.getUserInfo(id).then(response => {
    let json = response.data
    window.sessionStorage.setItem('wemesh.userInfo', JSON.stringify(json))
    dispatch(types.GET_USER_INFO, {
      userInfo: json
    })
    router.go({name: 'home'})
  }, response => {
    return swal('发生错误', response.statusText, 'error')
  })
}
