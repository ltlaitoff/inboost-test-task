import Header from './containers/Header/Header.component'
import Sidebar from './containers/Sidebar/Sidebar.component'
import Workspace from './containers/Workspace/Workspace.component'
import { useStore } from './contexts/store.context'
import { database } from './utils/database'
import { setStateAction } from './store/store.actions'

function App() {
	return (
		<div className="h-full flex flex-col">
			<Header />

			<div className="w-full max-w-[1440px] mx-auto flex h-full">
				<Sidebar />
				<Workspace />
			</div>
		</div>
		</StoreProvider>
	)
}

export default App
