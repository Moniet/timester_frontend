import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { colors, mq } from '../styles/theme'
import { readableDay, readableMonth } from '../utils/dateUtils'
import { userData, loadUserData } from '../actions/userDataActions'
import api from '../adapters/api'
import Grid from './Grid'
import Container from './Container'
import Task from './Task'
import Menu from './Menu'
import TaskMenu from './TaskMenu';
import MenuButton from './MenuButton'

const DateContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin-top: -2rem;

    ${mq[0]} {
        padding-top: 2rem;
        height: 48%;
    }
`

const MonthYear = styled.div` // displays month and year like so -- 
    color: white;
    letter-spacing: 5px;
    font-weight: 300;
    font-size: 0.75em;
    margin-top: -1.5rem;

    ${mq[0]} {
        margin-top: 0;
        letter-spacing: 2px;
    }
`

const Banner = styled.div`
    position: relative;
    width: 100%;
    background: linear-gradient(30deg, ${colors.secondary}, ${colors.primary});
    z-index: 2000;
    ${mq[0]} {
        height: 50%;
        clip-path: polygon(50% 0%, 100% 0, 100% 68%, 79% 80%, 58% 80%, 37% 87%, 19% 87%, 0 100%, 0% 35%, 0 0);
    }
`

const BannerHeader = styled.h1`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const MenuButtonContainer = styled.div`
    button { 
        margin-top: -0.5rem;
    }
`

const TaskPage = ({ match, tasks, token, getUserData }) => {
    const [menuToggled, toggleMenu] = useState(false)
    const [taskMenuToggled, toggleTaskMenu] = useState(false)
    const date = new Date(match.params.date)
    const day = readableDay(date)
    const dayNum = match.params.date.split('-')[2]

    useEffect(() => {
       if (tasks.length === 0) getUserData(localStorage.getItem('token'));
    }, [tasks])

    if (!tasks) {
        getUserData(localStorage.getItem('token'))
    }

    const showMenu = () => {
        if (taskMenuToggled && menuToggled) {
            toggleTaskMenu(!taskMenuToggled)
        } else {
            toggleMenu(!menuToggled)
        }
    }

    const showTaskMenu = () => toggleTaskMenu(!taskMenuToggled)
    const submitTask = (task, goals) => api.createTasks(token, task, goals).then(getUserData(token))

    return (
        <Container >
            <Banner> 
                <DateContainer>
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="199" viewBox="0 0 159 199"><text transform="translate(1 158)" fill="rgba(255,255,255,0.13)" stroke="#fff" strokeWidth="1" fontSize="149" fontFamily="DroidSansMono, Droid Sans Mono" letterSpacing="-0.08em" opacity="0.958"><tspan x="0" y="0">{ dayNum }</tspan></text></svg>
                    <MonthYear>{ readableMonth(date) } { date.getFullYear() }</MonthYear>
                </DateContainer>
                <BannerHeader className="banner-header">{ day }</BannerHeader>
            </Banner>
            <MenuButtonContainer>
                <MenuButton showMenu={ showMenu } menuToggled={ menuToggled }/>
            </MenuButtonContainer>
            <Menu menuToggled={ menuToggled } showTaskMenu={ showTaskMenu } scrollPercent={50}/>
            <TaskMenu menuToggled={ taskMenuToggled } submitTask={ submitTask }/>
            <Grid>
                { tasks.filter(task => task.attributes.date === match.params.date).map((task, i) => <Task task={ task } key={i} />) }
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    const { tasks } = state.userData
    const { token } = state
    return {
        tasks,
        token: token.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserData: token => dispatch(userData(token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage)