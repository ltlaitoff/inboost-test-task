import { useStore } from '../../../../contexts/store.context'
import { createEmptyNote } from '../../../../helpers/store.helper'
import { addNoteAction } from '../../../../store/store.actions'
import ControlBase from '../ControlBase/ControlBase.component'

function ControlAdd() {
	const { dispatch } = useStore()

	return (
		<ControlBase onClick={() => dispatch(addNoteAction(createEmptyNote()))}>
			Add
		</ControlBase>
	)
}

export default ControlAdd
