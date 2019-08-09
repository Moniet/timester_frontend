import React from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './components/Login'
import api from './adapters/api'

const App = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={ Home } />
        <Route exact path="/Login" component={ Login } />
      </Layout>
    </Router>
  );
}

export default App;
