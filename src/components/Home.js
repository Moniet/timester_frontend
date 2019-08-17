import React from 'react'
import Login from './Login'
import Dashboard from './Dashboard'

const Home = ({ token }) => {
    const homePage = (token.token === 'false' || !token.token ? <Login /> : <Dashboard token={ token.token } />);
    return (
        homePage 
    )
}

export default Home