import { lensPath, findIndex, propEq, set, append, over, reject } from 'ramda'
import  cLens   from '../common/utilities/cLens'

  const defaultState = {
    catalog: [],
    fetching: false,
    fetched: false,
    error: null,
    language: 'en',
    view: 'list',
    fav: false
  }
  
  export default (state = defaultState, { type, payload } = {}) => {
    // Lenses
    const catalogLense = lensPath(['catalog'])

    switch (type) {
      case 'FETCH_CATALOG_PENDING':
        return { ...state, fetching: true, fetched: false, error: null }
      case 'FETCH_CATALOG_REJECTED':
        return { ...state, fetching: false, fetched: false, error: payload }
      case 'FETCH_CATALOG_FULFILLED':
        return { ...state, catalog: payload, fetching: false, fetched: true, error: null }
      case 'SAVE_PHONES_PENDING':
      case 'SAVE_PHONES_REJECTED':
      case 'SAVE_PHONES_FULFILLED':
        return { ...state, ...payload, fetching: false, fetched: true, error: null }
      case 'SET_LANGUAGE':
        return { ...state, language: payload.language }
      case 'CHANGE_VIEW':
        return { ...state, view: payload, fav: payload === 'fav' && true }
      case 'SET_FAV':
        const index = findIndex(propEq('id', payload.id), state.catalog)
        const phoneIdxLense = cLens(catalogLense, index)
        return set(phoneIdxLense, {...payload, fav: !payload.fav}, state)
      case 'SAVE_PHONE':
          return over(catalogLense, append({ ...payload, id: state.catalog.length }), state)
      case 'DELETE_PHONE':
          return over(catalogLense, reject(propEq('id', payload.id)), state)
      default:
        return state
    }
  }
  