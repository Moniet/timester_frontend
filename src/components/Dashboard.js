import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { userData } from '../actions/userDataActions'
import { colors, mq } from '../styles/theme'

import Container from '../components/Container'
import TaskGrid from '../components/TaskGrid'
import MenuButton from './MenuButton'
import DashboardMessage from './DashboardMessage'
import TaskMenu from './TaskMenu'
import Nav from './Nav'

const Banner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(30deg, ${colors.primary}, ${colors.secondary}, ${colors.tertiary});

    ${mq[0]} {
        clip-path: polygon(0 0, 100% 0, 100% 70%, 0% 100%);
    }
    z-index: 1000;
`

const BannerContainer = styled.div`
    width: 100%;
    height: 45%;
`

const BannerHeader = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Dashboard = ({ loadUserData, token, tasks, goals }) => {
    const [menuToggled, toggleMenu] = useState(false)

    useEffect(() => {
        loadUserData(token)
    }, [])

    const showMenu = () => {
        toggleMenu(!menuToggled)
    }
    
    return (
        <Container>
            <BannerContainer>
                <Banner>
                    <BannerHeader className="banner-header">Home</BannerHeader>
                </Banner>
                <MenuButton showMenu={ showMenu } />
            </BannerContainer>
            <TaskMenu menuToggled={ menuToggled }/>
            { tasks.length > 0 ? <TaskGrid tasks={ tasks } /> : <DashboardMessage message="CLICK THE MENU TO CREATE TASKS" />}
            <Nav />
        </Container>
    )
}

const mapStateToProps = (state, ownProps) => {
    let { tasks, goals} = state.userData;
    return {
        tasks,
        goals
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUserData: token => dispatch(userData(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)