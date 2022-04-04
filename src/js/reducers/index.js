import { combineReducers } from 'redux'

import fetch from './fetch'
import catalog from './catalog'
import phone from './phone'

import fetchReducer from './fetchReducer'

//const catalog = fetchReducer('CATALOG')
//const phones = fetchReducer('PHONE')


export default combineReducers({
  fetch,
  catalog,
  phone,
})