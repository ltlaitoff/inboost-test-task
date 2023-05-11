import ControlDelete from '../ControlDelete/ControlDelete.component'
import ControlAdd from '../ControlAdd/ControlAdd.component'
import ControlEdit from '../ControlEdit/ControlEdit.component'
import ControlToggleSidebar from '../ControlToggleSidebar/ControlToggleSidebar.component'

function Controls() {
	return (
		<div className="flex gap-x-1 py-1">
			<ControlToggleSidebar />
			<ControlAdd />
			<ControlDelete />
			<ControlEdit />
		</div>
	)
}

export default Controls
