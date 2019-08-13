import React from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './components/Login'
import TaskPage from './components/TaskPage'
import GoalPage from './components/GoalPage'
import { setToken } from './actions/tokenActions'

const App = ({ setTokenState, token }) => {
  useEffect(() => {
    setTokenState(localStorage.getItem('token'))
  }, []);

  // update state with the token
  // get state and map to props, pass down props to Home 
  return (
    <Router>
      <Layout>
        <Route exact path="/" render={ () => <Home token={ token } /> } />
        <Route exact path="/Login" component={ Login } />
        <Route path="/tasks/:date" component={TaskPage} />
        <Route path="/goals/:id" component={GoalPage} />
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
