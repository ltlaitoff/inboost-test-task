import classnames from 'classnames'
import ControlBase from '../ControlBase/ControlBase.component'
import { useStore } from '../../../../contexts/store.context'
import { setChosenNoteStatusAction } from '../../../../store/store.actions'

function ControlEdit() {
	const { state, dispatch } = useStore()

	return (
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
	)
}

export default ControlEdit
