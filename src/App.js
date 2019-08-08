import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css'
import Layout from './components/Layout'
import Login from './components/Login'
import api from './adapters/api'

let token = localStorage.getItem('token');

const App = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Login} />
      </Layout>
    </Router>
  );
}

export default App;
