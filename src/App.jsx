import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Home'
import History from './History'
import Jsx from './Jsx'
import Components from './Components'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/jsx' element={<Jsx />} />
        <Route path='/components' element={<Components />} />
      </Routes>
    </>
  )
}

export default App
