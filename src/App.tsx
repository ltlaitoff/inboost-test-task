import Header from './containers/Header/Header.component'
import Sidebar from './containers/Sidebar/Sidebar.component'
import Workspace from './containers/Workspace/Workspace.component'
import { StoreProvider } from './contexts/store.context'

function App() {
	return (
		<StoreProvider>
			<Header />

			<div className="flex">
				<Sidebar />
				<Workspace />
			</div>
		</StoreProvider>
	)
}

export default App
