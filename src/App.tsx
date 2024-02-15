

import {Routes,Route} from 'react-router-dom'
import Home from './home/Home'
import MainApp from './app/_App'
function App() {

  return (
    <>

    <Routes>
    <Route path='/' element={<Home />} />
    //both the routes protected
    <Route path='/app' element={<MainApp />} />
    <Route path='/game' element={<MainApp />} />
    </Routes>
    
    </>
  )
}

export default App
