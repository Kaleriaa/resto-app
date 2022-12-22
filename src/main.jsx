import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './components/app'
import store from './store'
import RestoServiceContext from './components/service-context'
import RestoService from './services/service'
import './index.css'

const service = new RestoService()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RestoServiceContext.Provider value={service}>
				<App />
			</RestoServiceContext.Provider>
		</Provider>
	</React.StrictMode>
)
