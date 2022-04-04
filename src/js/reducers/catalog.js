import { lensPath, findIndex,propEq,set,open,append,over,reject } from 'ramda'
import  cLens   from '../common/utilities/cLens'



  const defaultCatalog = 
    [
      {
        id:0,
        name: 'iPhone_8',
        manufacturer:'Apple',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        color: 'black',
        price:'769',
        imageFileName:'IPhone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav: false
      },
      {
        id:1,
        name: 'Samsung 1',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },
      {
        id:2,
        name: 'Samsung 2',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },      
      {
        id:3,
        name: 'Samsung 3',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },      
      {
        id:4,
        name: 'Samsung 4',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },      
      {
        id:5,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },
      {
        id:6,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },
      {
        id:7,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },
      {
        id:8,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },
      {
        id:9,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },
      {
        id:10,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },
      {
        id:11,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },
      {
        id: 12,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },
      {
        id:13,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
      ,      {
        id:14,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
      ,      {
        id:15,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
      ,      {
        id:16,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
      ,      {
        id:17,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
      ,      {
        id:18,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
      ,      {
        id:19,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
      ,      {
        id:20,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },
      {
        id:21,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },
      {
        id:22,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },
      {
        id:23,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },
      {
        id:24,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      },
      {
        id:25,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
      ,      {
        id:26,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
      ,      {
        id:27,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
      ,      {
        id:28,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
      ,      {
        id:29,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
      ,      {
        id:30,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
      ,      {
        id:31,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
      ,      {
        id:32,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
      ,      {
        id:33,
        name: 'Samsung 5',
        manufacturer:'Samsung',
        description:'lorem ipsum',
        color: 'white',
        price:'560',
        imageFileName:'Iphone_8.png',
        screen: '4.7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
        fav:false
      }
    ]
  
  
  const defaultState = {
    phoneList: defaultCatalog,
    fetching: false,
    fetched: false,
    error: null,
    language: 'en',
    view: 'list',
    fav: false
  }
  
  
  export default (state = defaultState, { type, payload } = {}) => {
    // Lenses
    const phoneListLense = lensPath(['phoneList'])

    switch (type) {
      case 'FETCH_CATALOG':
        return { ...state, fetching: false, fetched: true, error: null }
      case 'FETCH_CATALOG_PENDING':
        return { ...state, fetching: true, fetched: false, error: null }
      case 'FETCH_CATALOG_REJECTED':
        return { ...state, fetching: false, fetched: true, error: payload }
      case 'FETCH_CATALOG_FULFILLED':
        return { ...state, ...payload, fetching: false, fetched: true, error: null }
      case 'SAVE_PHONE_PENDING':
      case 'SAVE_PHONE_REJECTED':
      case 'SAVE_PHONE_FULFILLED':
        return state
      case 'SET_LANGUAGE':
        return { ...state, language: payload.language }
      case 'CHANGE_VIEW':
        return { ...state, view: payload, fav: payload === 'fav' && true }
      case 'SET_FAV':
        const index = findIndex(propEq('id', payload.id), state.phoneList)
        const phoneIdxLense = cLens(phoneListLense, index)
        return set(phoneIdxLense, {...payload, fav: !payload.fav}, state)
      case 'SAVE_PHONE':
          return over(phoneListLense, append({ ...payload, id: state.phoneList.length }), state)
      case 'DELETE_PHONE':
          return over(phoneListLense, reject(propEq('id', payload.id)), state)
      default:
        return state
    }
  }
  