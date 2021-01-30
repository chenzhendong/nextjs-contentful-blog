import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store: any = undefined

const initialState = {
  page: 0,
  pageSize: 10,
  category: ''
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'PREV_PAGE':
      return {
        ...state,
        page: state.page - 1
      }
    case 'NEXT_PAGE':
      return {
        ...state,
        page: state.page + 1
      }
    case 'CHANGE_CATEGORY':
      return {
        ...state,
        category: action.payload
      }
    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState: any) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}