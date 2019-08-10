import React from 'react'
import { useEffect } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { connect } from 'react-redux'

const Home = ({ token }) => {
    const homePage = (token.token === 'false' ? <Login /> : <Dashboard token={ token.token } />);
    console.log(token);
    
    return (
        homePage 
    )
}

export default Home