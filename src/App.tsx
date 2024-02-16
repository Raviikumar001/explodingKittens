
import './index.css';
import {Routes,Route} from 'react-router-dom'
import Home from './home/Home'
import MainApp from './app/_App'
import ProtectedRoute from './components/_ProtectedRoutes'
import Game from './game/_game'
import Instructions from './app/_Instructions';
function App() {

  return (
    <>

    <Routes>
    <Route path='/' element={<Home />} />

    <Route element={<ProtectedRoute />}> 
        <Route path='/app' element={<MainApp />} />
        <Route path='/game' element={<Game />} />
        <Route path='/app/instructons' element={<Instructions />} / >
      </Route>
    </Routes>
    
    </>
  )
}

export default App
