import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import Add from './components/Add'; 
import Edit from './components/Edit';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>


    </Routes>
    <Footer/>
    </>
  )
}

export default App
