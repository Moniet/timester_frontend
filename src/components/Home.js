import React from 'react'
import { useEffect } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { connect } from 'react-redux'
import { home } from '../actions/homeActions'



const Home = ({ token, tasks, goals, loadHomePage, dispatch}) => {
    useEffect(()=> {
        loadHomePage()
    });

    let homePage = token !== null ? <Login /> : <Dashboard />;

    return homePage
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadHomePage: () => dispatch(home)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        token: state.token,
        tasks: state.tasks,
        goals: state.goals
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);