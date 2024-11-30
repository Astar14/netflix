import Front from './components/Front'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Front />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App