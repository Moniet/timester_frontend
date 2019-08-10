import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import {dashboardAction} from '../actions/dashboardActions'

const Dashboard = ({ loadUserData, token }) => {
    useEffect(() => {
        if (token !== 0 && token) {
            loadUserData(localStorage.getItem('token'))
        }
    })

    return (
        <div>haha</div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.tasks,
        goals: state.goals
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUserData: token => dispatch(dashboardAction(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)