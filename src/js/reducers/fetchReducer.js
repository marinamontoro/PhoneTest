const defaultState = {
    fetching: false,
    fetched: false,
    error: null,
    data: [],
  }
  
  export default (entity = 'ENTITY') => (state = defaultState, { type, payload } = {}) => {
    switch (type) {
      case `FETCH_${entity}_PENDING`:
        return { ...state, fetching: true, fetched: false, error: null }
      case `FETCH_${entity}_REJECTED`:
        return { ...state, fetching: false, fetched: false, error: payload }
      case `FETCH_${entity}_FULFILLED`:
        return { ...state, fetching: false, fetched: true, error: null, data: payload }
      default:
        return state
    }
  }
  