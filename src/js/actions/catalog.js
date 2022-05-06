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
