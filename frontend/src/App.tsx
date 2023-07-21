import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Main from './pages/Main';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Signup from './pages/Signup';
import Detail from './pages/Detail';
import Clubjoin from './pages/Clubjoin';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/clubjoin' element={<Clubjoin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
