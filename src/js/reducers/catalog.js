  const defaultState = {
    catalog: [],
    fetching: false,
    fetched: false,
    error: null,
    language: 'en',
    view: 'list',
  }
  
  export default (state = defaultState, { type, payload } = {}) => {

    switch (type) {
      case 'FETCH_CATALOG_PENDING':
        return { ...state, fetching: true, fetched: false, error: null }
      case 'FETCH_CATALOG_REJECTED':
        return { ...state, fetching: false, fetched: false, error: payload }
      case 'FETCH_CATALOG_FULFILLED':
        return { ...state, catalog: payload, fetching: false, fetched: true, error: null }
      default:
        return state
    }
  }
  