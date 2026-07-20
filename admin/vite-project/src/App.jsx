import React from 'react'
import Navbar from './components/Navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import {Route, Routes} from 'react-router-dom'
import Add from './pages/Add/add'
import List from './pages/List/list'
import Orders from './pages/Orders/orders'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const url="http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
        <Route path='/add' element={<Add url={url}/>}/>
        <Route path='/list' element={<List url={url}/>}/>
        <Route path='/orders' element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
