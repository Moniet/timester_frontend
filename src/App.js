import React from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './components/Login'
import TaskPage from './components/TaskPage'
import GoalPage from './components/GoalPage'
import Calendar from './components/Calendar'
import { setToken } from './actions/tokenActions'

const App = ({ setTokenState, token }) => {
  useEffect(() => {
    setTokenState(localStorage.getItem('token'))
  }, []);
  
  return (
    <Router>
      <Layout>
        <Route exact path="/" render={ () => <Home token={ token } /> } />
        <Route exact path="/Login" component={ Login } />
        <Route path="/tasks/:date" component={ TaskPage } />
        <Route path="/goals/:id" component={ GoalPage } />
        <Route path="/calendar" component={ Calendar } />
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
