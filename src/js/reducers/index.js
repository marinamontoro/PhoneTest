import { combineReducers } from 'redux'

import fetch from './fetch'
import catalog from './catalog'

export default combineReducers({
  fetch,
  catalog
})