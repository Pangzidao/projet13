import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'


function App() {
    return(
        <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/profile" element={<Profile />}/>
          </Routes>
        </Router>
      </Provider>
    )
}

export default App
   



