import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {getLogin, getProfile, setProfile} from './data';
import { store } from './store';

function App() {

    /*let token = ""
    getLogin({"email": "tony@stark.com", "password": "password123"}).then(data => {
      console.log(data.body.token)
      token = data.body.token
      getProfile(token).then(data => console.log(data))
      setProfile(token, {"firstName":"Tony","lastName":"Stark"}).then(data => console.log(data))
    })*/
    
    return(
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/profile" element={<Profile />}/>
          </Routes>
        </Router>
    )
}

export default App
   



