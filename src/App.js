import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import {getLogin, getProfile, setProfile} from './data';
import { store } from './store';
import { useSelector } from 'react-redux';

function App() {

  const logged = useSelector(state => state.logged)

    return(
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/profile" element={logged? (<Profile />) : <Navigate replace to={"/"} />}/>
          </Routes>
        </Router>
    )
}

export default App
   



