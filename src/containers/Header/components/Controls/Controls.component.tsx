import { useStore } from '../../../../contexts/store.context'
import { createEmptyNote } from '../../../../helpers/store.helper'
import { addNoteAction } from '../../../../store/store.actions'
import Control from '../Control/Control.component'

function Menu() {
	const { state, dispatch } = useStore()

	return (
		<div className="flex gap-x-1 py-1">
			<Control onClick={() => dispatch(addNoteAction(createEmptyNote()))}>
				Add
			</Control>
			<Control disabled={state.chosenNoteId === ''}>Delete</Control>
			<Control disabled={state.chosenNoteId === ''}>Edit</Control>
		</div>
	)
}

export default Menu
