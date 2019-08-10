import React from 'react'
import { useEffect } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { connect } from 'react-redux'
import { home } from '../actions/homeActions'

const Home = ({ token }) => {
    const homePage = (token.token === 'false' ? <Login /> : <Dashboard token={token} />);
    console.log(token);
    
    return (
        homePage 
    )
}

export default Home