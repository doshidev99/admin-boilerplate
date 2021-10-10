import React, { useReducer, useContext, createContext } from 'react'

type IContext = {
  modeTheme: string
  setModeTheme: (param: string) => void
}

type IAction = {
  type: string
  payload: any | string
}

const initialState = {
  modeTheme: 'light',
  setModeTheme: () => {},
}

const reducer = (state: IContext, { type, payload }: IAction) => {
  switch (type) {
    case 'SET_MODE_THEME': {
      return {
        ...state,
        modeTheme: payload,
      }
    }
    default:
      return state
  }
}

const GlobalContext = createContext<IContext>(initialState)

const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const _handleSetModeTheme = (mode: string) => {
    dispatch({
      type: 'SET_MODE_THEME',
      payload: mode,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setModeTheme: _handleSetModeTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalProvider, useGlobalContext }
