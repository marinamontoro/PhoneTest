import React, { useReducer, createContext } from 'react'
import { propOr } from 'ramda'

import en from '../../assets/literals/EN'
import es from '../../assets/literals/ES'

const translations = { en, es }
const getTranslate = lang => key => propOr(key, key, translations[lang])
const initialState = { lang: 'en', t: getTranslate('en') }

export const I18nContext = createContext(initialState)
export const I18nContextProvider = ({ children }) => {
  const { Provider } = I18nContext
  const reducer = (_, lang) => ({ lang, t: getTranslate(lang) })
  const [state, changeLang] = useReducer(reducer, initialState)
  return <Provider value={{ ...state, changeLang }}>{children}</Provider>
}
