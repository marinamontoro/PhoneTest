import Api from '../common/api'
import config from '../common/config'

export const fetchPhone = token => dispatch => {
  const api = new Api({
    baseUrl: config().urls.baseUrl,
    defaultOptions: { headers: { Authorization: 'Bearer ' + token } },
  })
  dispatch({
    type: 'FETCH_PHONE',
    payload: api.get('/phone/'),
  })
}

export const savePhone = payload => ({
  type: 'SAVE_PHONE',
  payload,
})