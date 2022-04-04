
import { compose, applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducers from './reducers'

const hiddenActions = ['EXAMPLE_HIDDEN_ACTION']
const logger = createLogger({
  predicate: (_, action) => !hiddenActions.includes(action.type),
  collapsed: (_, __, logEntry) => !logEntry.error,
})

const middleware = [promise(), thunk, ... [logger]]
const store = createStore(reducers, compose(applyMiddleware(...middleware)))

export default store