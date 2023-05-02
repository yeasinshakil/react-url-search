

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Users from './Users'
import User from './User'
import Navbar from './Navbar'
import ChildContainer from './componetnts/ChildContainer'


function App() {


  return (
    <>
      <div className=' '>
        <Navbar />
        <Routes>
          <Route path='/' element={<>
            
            <ChildContainer />
          </>}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/users/:name' element={<User />}></Route>
         
      
          {/* <Route path='/:key' element={<ChildContainer/>}></Route> */}
          {/* <Route path="/" exact render={(props) => <ChildContainer {...props} keyParam={props.location.search.slice(5)} />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
