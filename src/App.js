import React from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import logo from './logo.svg'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './components/Login'
import { setToken } from './actions/tokenActions'



const App = ({ setTokenState, token }) => {
  useEffect(() => {
    const token = localStorage.getItem('token')
    setTokenState(token)
  }, []);

  // update state with the token
  // get state and map to props, pass down props to Home 
    return (
      <Router>
        <Layout>
          <Route exact path="/" render={ () => <Home token={ token } /> } />
          <Route exact path="/Login" component={ Login } />
        </Layout>
      </Router>
    );
}

const mapStateToProps = (state) => {
  const { token } = state;
  return {
    token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTokenState: token => dispatch(setToken(token))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
