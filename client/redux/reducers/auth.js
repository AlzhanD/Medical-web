import axios from 'axios'
import Cookies from 'universal-cookie'
import { history } from '..'

const UPDATE_LOGIN = 'UPDATE_LOGIN'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const LOGIN = 'LOGIN'
const SIGN_OUT = 'SIGN_OUT'

const cookies = new Cookies()

const initialState = {
  email: '',
  password: '',
  token: cookies.get('token'),
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return { ...state, email: action.email }
    }
    case UPDATE_PASSWORD: {
      return { ...state, password: action.password }
    }
    case SIGN_OUT: {
      return { ...state, token: '', password: '', user: {} }
    }
    case LOGIN: {
      return { ...state, token: action.token, password: '', user: action.user }
    }
    default:
      return {
        ...state
      }
  }
}

export function logOut() {
  cookies.remove('token')
  window.location.href = '/'
  return false
}

export function stateCleaner() {
  return { type: SIGN_OUT }
}

export function updateLoginField(email) {
  return { type: UPDATE_LOGIN, email }
}

export function updatePasswordField(password) {
  return { type: UPDATE_PASSWORD, password }
}

export function signIn() {
  return (dispatch, getState) => {
    const { email, password } = getState().auth
    axios.post('/api/v1/auth', { email, password }).then(({ data }) => {
      dispatch({ type: LOGIN, token: data.token, user: data.user })
      history.push('/private')
    })
  }
}

export function signUp() {
  return (dispatch, getState) => {
    const { email, password } = getState().auth
    axios.post('/api/v1/register', { email, password })
  }
}

export function trySignIn() {
  return (dispatch) => {
    fetch('/api/v1/auth')
      .then((r) => r.json())
      .then((data) => {
        dispatch({ type: LOGIN, token: data.token, user: data.user })
        history.push('/private')
      })
  }
}
