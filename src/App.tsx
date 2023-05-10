import { useEffect, useRef } from 'react'
import Header from './containers/Header/Header.component'
import Sidebar from './containers/Sidebar/Sidebar.component'
import Workspace from './containers/Workspace/Workspace.component'
import { useStore } from './contexts/store.context'
import { database } from './utils/database'
import { setStateAction } from './store/store.actions'

function App() {
	const { state, dispatch } = useStore()

	const isMountRef = useRef(false)

	useEffect(() => {
		async function fetchData() {
			await database.intialize()
			const storeFromDatabase = await database.getStore()

			if (storeFromDatabase) {
				dispatch(setStateAction(storeFromDatabase))
			}
		}

		fetchData()
	}, [])

	useEffect(() => {
		if (isMountRef.current) {
			database.updateStore(state)
			return
		}

		isMountRef.current = true
	}, [state])

	return (
		<div className="h-full flex flex-col">
			<Header />

			<div className="w-full max-w-[1440px] mx-auto flex h-full">
				<Sidebar />
				<Workspace />
			</div>
		</div>
	)
}

export default App
