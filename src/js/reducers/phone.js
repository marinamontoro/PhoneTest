import {
    lensPath,
    over, append

  } from 'ramda'
  

const defaultCatalog={

}
  const defaultState = {
   phoneList: defaultCatalog,
   fetching: false,
   fetched: false,
   error: null,
   language: 'en',
   view: 'list',
   fav: false
 }
  
  
   export default (state=defaultState, { type, payload } = {}) => {
    // Lenses
    const phoneListLense = lensPath(['phoneList'])

    switch (type) {
      case 'SAVE_PHONE_PENDING':
      case 'SAVE_PHONE_REJECTED':
      case 'SAVE_PHONE_FULFILLED':
        return state
      default:
        return state
    }
  }
  