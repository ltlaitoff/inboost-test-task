import classnames from 'classnames'
import { useStore } from '../../../../contexts/store.context'
import { createEmptyNote } from '../../../../helpers/store.helper'
import {
	addNoteAction,
	setChosenNoteStatusAction
} from '../../../../store/store.actions'
import ControlBase from '../Control/ControlBase.component'

function Menu() {
	const { state, dispatch } = useStore()

	return (
		<div className="flex gap-x-1 py-1">
			<ControlBase onClick={() => dispatch(addNoteAction(createEmptyNote()))}>
				Add
			</ControlBase>
			<ControlBase disabled={state.chosenNoteId === ''}>Delete</ControlBase>
			<ControlBase
				className={classnames('capitalize', {
					'!bg-purple-300 !text-white': state.chosenNoteStatus === 'edit'
				})}
				onClick={() =>
					dispatch(
						setChosenNoteStatusAction(
							state.chosenNoteStatus === 'edit' ? 'preview' : 'edit'
						)
					)
				}
				disabled={state.chosenNoteId === ''}
			>
				{state.chosenNoteStatus}
			</ControlBase>
		</div>
	)
}

export default Menu
