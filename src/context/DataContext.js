import {createContext, useReducer} from 'react'

export const DataContext = createContext()

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {...state, data: action.payload}
    case 'UPDATE_PENDING':
      return {...state, isPending: action.payload}
    case 'UPDATE_ERROR':
      return {...state, error: action.payload}
    case 'UPDATE_SEARCHTERM':
      return {...state, searchTerm: action.payload}
    case 'UPDATE_SEARCHRESULT':
      return {...state, searchResult: action.payload}
    case 'UPDATE_FAVORITESLIST':
      return {...state, favoritesList: action.payload}
    case 'UPDATE_SHOWALL':
      return {...state, showAll: action.payload}
    case 'UPDATE_SHOWFAVORITES':
      return {...state, showFavorites: action.payload}
    default:
      return state
  }
}

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, {
    data: null,
    isPending: true,
    error: null,
    searchTerm: '',
    searchResult: '',
    favoritesList: [],
    showAll: false,
    showFavorites: false
  })

  const updateMovies = (movies) => {
    dispatch({type: 'UPDATE_DATA', payload: movies})
  }
  const updatePending = (pending) => {
    dispatch({type: 'UPDATE_PENDING', payload: pending})
  }
  const updateError = (error) => {
    dispatch({type: 'UPDATE_ERROR', payload: error})
  }
  const updateSearchTerm = (searchTerm) => {
    dispatch({type: 'UPDATE_SEARCHTERM', payload: searchTerm})
  }
  const updateSearchResult = (searchResult) => {
    dispatch({type: 'UPDATE_SEARCHRESULT', payload: searchResult})
  }
  const updateFavoritesList = (favorites) => {
    dispatch({type: 'UPDATE_FAVORITESLIST', payload: favorites})
  }
  const updateShowAll = (all) => {
    dispatch({type: 'UPDATE_SHOWALL', payload: all})
  }
  const updateShowFavorites = (favorites) => {
    dispatch({type: 'UPDATE_SHOWFAVORITES', payload: favorites})
  }

  return (
    <DataContext.Provider value={{...state, updateMovies, updatePending, updateError, updateSearchTerm, updateSearchResult, updateFavoritesList, updateShowAll, updateShowFavorites}}>
      {children}
    </DataContext.Provider>
  )
}