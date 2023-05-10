import ControlDelete from '../ControlDelete/ControlDelete.component'
import ControlAdd from '../ControlAdd/ControlAdd.component'
import ControlEdit from '../ControlEdit/ControlEdit.component'

function Controls() {
	return (
		<div className="flex gap-x-1 py-1">
			<ControlAdd />
			<ControlDelete />
			<ControlEdit />
		</div>
	)
}

export default Controls
