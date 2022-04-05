import Api from '../common/api'
import config from '../common/config'

export const fetchCatalog = () => dispatch => {
  const api = new Api({
    baseUrl: config().urls.baseUrl,
    defaultOptions: { headers: {"Access-Control-Allow-Origin": "*"}}
  })
  dispatch({
    type: 'FETCH_CATALOG',
    payload: api.fetch('/phones'),
  })
}

export const setLanguage = payload => ({
  type: 'SET_LANGUAGE',
  payload,
})

export const changeView = payload => ({
  type: 'CHANGE_VIEW',
  payload,
})

export const setFav = payload => ({
  type: 'SET_FAV',
  payload,
})

export const savePhone = payload => ({
  type: 'SAVE_PHONE',
  payload,
})

export const deletePhone = payload => ({
  type: 'DELETE_PHONE',
  payload,
})