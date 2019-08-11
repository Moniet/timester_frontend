import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import {dashboardAction} from '../actions/dashboardActions'
import { colors, mq } from '../styles/theme'
import TaskGrid from '../components/TaskGrid'
import Container from '../components/Container'

const Banner = styled.div`
    position: relative;
    width: 100%;
    background: linear-gradient(30deg, ${colors.primary}, ${colors.secondary}, ${colors.tertiary});

    ${mq[0]} {
        height: 45%;
        clip-path: polygon(0 0, 100% 0, 100% 60%, 0% 100%);
    }
`

const BannerHeader = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Dashboard = ({ loadUserData, token, tasks, goals }) => {
    useEffect(() => {
        if (token && tasks.length === 0) {
            loadUserData(token)
        }
    })
    

    return (
        <Container>
            <Banner>
                <BannerHeader className="banner-header">Home</BannerHeader>
            </Banner>
            <TaskGrid tasks={tasks} />
        </Container>
    )
}

const mapStateToProps = (state, ownProps) => {
    let { tasks, goals} = state.userData;
    console.log(state)
    return {
        tasks,
        goals
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUserData: token => dispatch(dashboardAction(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)