export const LOGIN_INITIAL_STATE = {
  user: JSON.parse(window.localStorage.getItem('user')) || null,
  isFetching: false,
  error: false
}

export const LOGIN_ACTION_TYPES = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT'
}

export const UPDATE_ACTION_TYPES = {
  UPDATE_START: 'UPDATE_START',
  UPDATE_SUCCESS: 'UPDATE_SUCCESS',
  UPDATE_FAILURE: 'UPDATE_FAILURE'
}

export const updateLocalStorage = state => {
  window.localStorage.setItem('user', JSON.stringify(state.user))
}

export const updateReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case UPDATE_ACTION_TYPES.UPDATE_START: {
      const newState = {
        ...state,
        isFecthing: true
      }
      updateLocalStorage(newState)
      return newState
    }
    case UPDATE_ACTION_TYPES.UPDATE_SUCCESS: {
      const newState = {
        user: actionPayload,
        isFecthing: false,
        error: false
      }
      updateLocalStorage(newState)
      return newState
    }
    case UPDATE_ACTION_TYPES.UPDATE_FAILURE: {
      const newState = {
        user: state.user,
        isFecthing: false,
        error: true
      }
      updateLocalStorage(newState)
      return newState
    }
  }
  return state
}

export const loginReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case LOGIN_ACTION_TYPES.LOGIN_START: {
      const newState = {
        user: null,
        isFecthing: true,
        error: false
      }
      updateLocalStorage(newState)
      return newState
    }

    case LOGIN_ACTION_TYPES.LOGIN_SUCCESS: {
      const newState = {
        user: actionPayload,
        isFecthing: false,
        error: false
      }
      updateLocalStorage(newState)
      return newState
    }

    case LOGIN_ACTION_TYPES.LOGIN_FAILURE: {
      const newState = {
        user: null,
        isFecthing: false,
        error: true
      }
      updateLocalStorage(newState)
      return newState
    }

    case LOGIN_ACTION_TYPES.LOGOUT: {
      const newState = {
        user: null,
        isFecthing: false,
        error: false
      }
      updateLocalStorage(newState)
      return newState
    }
  }
  return state
}
