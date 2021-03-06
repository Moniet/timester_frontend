import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { userData, loadUserData } from '../actions/userDataActions'
import { colors, mq } from '../styles/theme'
import api from '../adapters/api'

import Container from '../components/Container'
import TaskGrid from '../components/TaskGrid'
import MenuButton from './MenuButton'
import DashboardMessage from './DashboardMessage'
import Menu from './Menu'
import TaskMenu from './TaskMenu';

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
    height: 50%;
`

const BannerHeader = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Dashboard = ({ getUserData, getData, token, tasks, goals }) => {
    const [menuToggled, toggleMenu] = useState(false)
    const [taskMenuToggled, toggleTaskMenu] = useState(false)

    useEffect(() => {
        getUserData(token)
    }, [])

    const showMenu = () => {
        if (taskMenuToggled && menuToggled) {
            toggleTaskMenu(!taskMenuToggled)
        } else {
            toggleMenu(!menuToggled)
        }
    }

    const showTaskMenu = () => toggleTaskMenu(!taskMenuToggled)
    const submitTask = (task, goals) => api.createTasks(token, task, goals).then(res => getData(res.tasks.data, res.goals.data))
    
    return (
        <Container>
            <BannerContainer>
                <Banner>
                    <BannerHeader className="banner-header">Home</BannerHeader>
                </Banner>
                <MenuButton showMenu={ showMenu } menuToggled={ menuToggled }/>
            </BannerContainer>
            <Menu menuToggled={ menuToggled } showTaskMenu={ showTaskMenu } scrollPercent={50} />
            { tasks.length > 0 ? <TaskGrid tasks={ tasks } /> : <DashboardMessage message="CLICK THE MENU TO CREATE TASKS" />}
            <TaskMenu menuToggled={ taskMenuToggled } submitTask={ submitTask }/>
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
        getUserData: token => dispatch(userData(token)),
        getData: (tasks, goals) => dispatch(loadUserData(tasks, goals))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)