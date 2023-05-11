import ControlBase from '../ControlBase/ControlBase.component'
import { useStore } from '../../../../contexts/store.context'
import { setSidebarOpenedAction } from '../../../../store/store.actions'

import './ControlToggleSidebar.component.css'
import classnames from 'classnames'

function ControlToggleSidebar() {
	const { state, dispatch } = useStore()

	return (
		<ControlBase
			className={classnames('sidebar-closed-button text-xl', {
				'bg-pink-200': !state.sidebarOpened
			})}
			onClick={() => dispatch(setSidebarOpenedAction(!state.sidebarOpened))}
		>
			{state.sidebarOpened === true ? '≡' : '⤋'}
		</ControlBase>
	)
}

export default ControlToggleSidebar
