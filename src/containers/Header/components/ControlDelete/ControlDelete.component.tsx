import { createPortal } from 'react-dom'
import { useStore } from '../../../../contexts/store.context'
import ControlBase from '../ControlBase/ControlBase.component'
import { useState } from 'react'
import { deleteNoteAction } from '../../../../store/store.actions'
import ConfirmDeletionModal from './components/ConfirmDeletionModal/ConfirmDeletionModal.component'

function ControlDelete() {
	const [deletion, setDeletion] = useState(false)

	const { state, dispatch } = useStore()

	const onClick = () => {
		setDeletion(true)
	}

	return (
		<>
			<ControlBase
				disabled={state.chosenNoteId === ''}
				onClick={onClick}
			>
				Delete
			</ControlBase>

			{deletion &&
				createPortal(
					<ConfirmDeletionModal
						onClose={() => setDeletion(false)}
						onYes={() => {
							dispatch(deleteNoteAction(state.chosenNoteId))
							setDeletion(false)
						}}
					/>,
					document.body
				)}
		</>
	)
}

export default ControlDelete
