import Header from './containers/Header/Header.component'
import Sidebar from './containers/Sidebar/Sidebar.component'
import Workspace from './containers/Workspace/Workspace.component'
import { StoreProvider } from './contexts/store.context'

function App() {
	return (
		<StoreProvider>
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
