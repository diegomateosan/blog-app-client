import { createContext, useReducer } from 'react'
import { LOGIN_INITIAL_STATE, loginReducer, updateReducer } from '../reducer/reducer'

function useLoginReducer () {
  const [state, dispatch] = useReducer(loginReducer, LOGIN_INITIAL_STATE)

  const loginStart = () => dispatch({ type: 'LOGIN_START' })

  const loginSuccess = user => dispatch({ type: 'LOGIN_SUCCESS', payload: user })

  const loginFailure = () => dispatch({ type: 'LOGIN_FAILURE' })

  const logout = () => dispatch({ type: 'LOGOUT' })

  return { state, loginStart, loginSuccess, loginFailure, logout }
}

function useUpdateReducer () {
  const [state, dispatch] = useReducer(updateReducer, LOGIN_INITIAL_STATE)

  const updateStart = () => dispatch({ type: 'UPDATE_START' })

  const updateSuccess = user => dispatch({ type: 'UPDATE_SUCCESS', payload: user })

  const updateFailure = () => dispatch({ type: 'UPDATE_FAILURE' })

  return { state, updateStart, updateSuccess, updateFailure }
}

export const Context = createContext()

export function ContextProvider ({ children }) {
  const { state, loginStart, loginSuccess, loginFailure, logout } = useLoginReducer()
  const { updateStart, updateSuccess, updateFailure } = useUpdateReducer()
  return (
    <Context.Provider value={{
      user: state.user,
      isFecthing: state.isFecthing,
      error: state.error,
      updateStart,
      updateSuccess,
      updateFailure,
      loginStart,
      loginSuccess,
      loginFailure,
      logout
    }}
    >
      {children}
    </Context.Provider>
  )
}
