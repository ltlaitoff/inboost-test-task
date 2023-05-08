import { StoreActions } from './store.actions'
import { RootState } from './store.types'

export const storeInitialState: RootState = {
	search: '',
	notes: [],
	chosenNoteId: ''
}

export function storeReducer(
	state: RootState = storeInitialState,
	action: StoreActions
): RootState {
	switch (action.type) {
		case 'SET_SEARCH': {
			return { ...state, search: action.payload }
		}

		case 'ADD_NOTE': {
			return { ...state, notes: [...state.notes, action.payload] }
		}

		case 'DELETE_NOTE': {
			const newNotes = state.notes.filter(note => note.id !== action.payload.id)

			return { ...state, notes: newNotes }
		}

		case 'UPDATE_NOTE': {
			const newNotes = state.notes.map(note => {
				if (note.id === action.payload.id) {
					return action.payload
				}

				return note
			})

			return { ...state, notes: newNotes }
		}

		case 'SET_CHOSEN_NOTE_ID': {
			return { ...state, chosenNoteId: action.payload }
		}

		default: {
			/* @ts-expect-error Error handling */
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}
