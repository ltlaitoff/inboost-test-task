import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StoreProvider } from './contexts/store.context.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StoreProvider>
		<App />
	</StoreProvider>
)
