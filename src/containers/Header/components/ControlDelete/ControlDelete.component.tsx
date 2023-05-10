import { useStore } from '../../../../contexts/store.context'
import ControlBase from '../ControlBase/ControlBase.component'

function ControlDelete() {
	const { state } = useStore()

	return <ControlBase disabled={state.chosenNoteId === ''}>Delete</ControlBase>
}

export default ControlDelete
