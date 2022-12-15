import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home} from '../pages/home'
import {About} from '../pages/About'
import {Contact} from '../pages/Contact'
import {Skills} from '../pages/Skills'
import {Works} from '../pages/Works'

export const App = () => {
    return(
        <Router>
            <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/skills" element={<Skills />}></Route>
            <Route exact path="/works" element={<Works />}></Route>
            </Routes>
        </Router>
    )
}





