import React from 'react'
import { storeInitialState, storeReducer } from '../store/store.reducer'
import { StoreActions } from '../store/store.actions'
import { RootState } from '../store/store.types'

type StoreProviderProps = {
	children: React.ReactNode
}

type Dispatch = (action: StoreActions) => void

const StoreContext = React.createContext<
	| {
			state: RootState
			dispatch: Dispatch
	  }
	| undefined
>(undefined)

function StoreProvider({ children }: StoreProviderProps) {
	const [state, dispatch] = React.useReducer(storeReducer, storeInitialState)

	const value = { state, dispatch }

	return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

function useStore() {
	const context = React.useContext(StoreContext)

	if (context === undefined) {
		throw new Error('useStore must be used within a StoreProvider')
	}

	return context
}

/* eslint-disable-next-line react-refresh/only-export-components */
export { StoreProvider, useStore }
