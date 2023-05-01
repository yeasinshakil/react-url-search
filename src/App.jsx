

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Users from './Users'
import User from './User'
import Navbar from './Navbar'

function App() {


  return (
    <>
      <div className=' '>
        <Navbar/>
        <Routes>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/users/:name' element={<User/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
