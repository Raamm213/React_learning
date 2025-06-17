import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/login.jsx'
import Details from './components/Details.jsx'
import DataProvider from './Context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <DataProvider>
    <Login />
    <Details />
  </DataProvider>
)
