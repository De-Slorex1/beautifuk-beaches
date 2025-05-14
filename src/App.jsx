import React from 'react'
import { Route,Routes } from 'react-router-dom'
import North from './Pages/North/North'
import Home from './Pages/Home/Home'
import South from './Pages/South/South'
import East from './Pages/East/East'
import West from './Pages/West/West'
import Navbar from './Components/Navbar/Navbar'
import About from './Pages/About/About'
import Query from './Pages/Query/Query'
import Contact from './Pages/Contact/Contact'
import BeachDetail from './Components/beachDetails/beachDetails'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route index path='/' element={<Home/>} />
          <Route path='/north' element={<North />} />
          <Route path='/south' element={<South />} />
          <Route path='/east' element={<East />} />
          <Route path='/west' element={<West />} />
          <Route path='/about' element={<About />} />
          <Route path="/beach/:slug" element={<BeachDetail />} />
          {/* <Route  path='/query' element={<Query />} /> */}
          <Route path='/Contact us' element={<Contact />} />
 </Routes>
    </div>
  )
}

export default App
