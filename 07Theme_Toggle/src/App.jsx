import './App.css'
import Themebtn from './components/Themebtn.jsx'
import Card from './components/Card.jsx'
import Context_provider, { useThemeContext } from './Toggle_Context/Context_provider'

function AppContent() {
  const { theme } = useThemeContext();

  return (
    <div className='flex justify-center items-center flex-col h-screen gap-2'>
      <Themebtn />
      <Card className={`${theme === 'my-dark' ? 'my-dark' : 'my-light'}`}/>
    </div>
  );
}

function App() {
  return (
    <Context_provider>
      <AppContent />
    </Context_provider>
  )
}

export default App