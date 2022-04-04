import getActionPromise from '../common/getActionPromise'

const defaultState = {
  appState: {
    fetching: false,
    fetched: false,
    error: null,
  },
}

export default (state = defaultState, { type, payload } = {}) => {
  const { storeName, status } = getActionPromise(type)

  if (!defaultState[storeName]) {
    return state
  }

  switch (status) {
    case 'PENDING':
      return {
        ...state,
        [storeName]: {
          fetching: true,
          fetched: false,
          error: null,
        },
      }
    case 'REJECTED':
      return {
        ...state,
        [storeName]: {
          fetching: false,
          fetched: false,
          error: payload,
        },
      }
    case 'FULFILLED':
      return {
        ...state,
        [storeName]: {
          fetching: false,
          fetched: true,
          error: null,
        },
      }
  }

  return state
}
