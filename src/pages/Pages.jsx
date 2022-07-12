import React from 'react'
import Home from './Home'
import Projects from './Projects'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'

const Pages = () => {
  return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Projects' element={<Projects />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
  )
}

export default Pages