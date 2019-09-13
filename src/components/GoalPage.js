/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { colors, mq } from '../styles/theme'
import { formatTime, formatToHours} from '../utils/dateUtils'
import { userData, loadUserData } from '../actions/userDataActions'
import { getCurrentTime } from '../utils/timeUtils'
import api from '../adapters/api'
import Container from './Container'
import Goal from './Goal'
import MenuButton from './MenuButton'
import Menu from './Menu'
import TaskMenu from './TaskMenu';
import EditMenu from './EditMenu';
import GoalPageBanner from './GoalPageBanner'
import { log } from 'util';
import { create } from 'istanbul-reports'

const Banner = styled.div`
    position: relative;
    width: 100%;
    overflow-x: hidden;
    z-index: 2000;

    ${mq[0]} {
       margin-bottom: 2rem;
   }
`

const Img = styled.img`
    width: 152%;
    height: auto;
    transform: translateX(-15%);
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: ${colors.bg};
`

const ButtonContainer = styled.div`
    position: relative;
    margin-bottom: 6rem;
    width: 25%;
    margin-left: auto;
`

const positionMenu = css`
    margin-top: 4rem;
`

const GoalPage = ({ match, goals, tasks, loadData, getData}) => {
    let token = localStorage.getItem('token')
    let allGoals; 
    let river;
    let time = getCurrentTime();
    let id = match.params.id; 
    let task = {};
    const [menuToggled, toggleMenu] = useState(false)
    const [taskMenuToggled, toggleTaskMenu] = useState(false)
    const [editMenuToggled, toggleEditMenu] = useState(false)

    if (goals) {
        let filteredGoals = goals.filter(goal => parseInt(goal.attributes.task_id) === parseInt(match.params.id))
        allGoals = filteredGoals.sort(function (a,b) {
            return formatToHours(b.start_time) - formatToHours(a.start_time)
        })
    }

    if (tasks.length !== 0) {
        task = tasks.find(t => parseInt(t.id) === parseInt(id)).attributes;   
    }
    
    useEffect(() => {
        if (goals.length === 0 && token !== 'false') loadData(localStorage.getItem('token'));
        river = document.querySelector('#river-front')
    }, [goals, tasks, match])

    const showMenu = () => {
        if (taskMenuToggled) {
            toggleTaskMenu(!taskMenuToggled)
        } else if (editMenuToggled)  {
            toggleEditMenu(!editMenuToggled)
        } else {
            toggleMenu(!menuToggled)
        }
    }

    const showTaskMenu = () => toggleTaskMenu(!taskMenuToggled)
    const showEditMenu = () => toggleEditMenu(!editMenuToggled)
    const createTask = (task, goals) => api.createTasks(token, task, goals).then(loadData(token)); 
    const createGoals = (goals) => api.createGoals(token, goals);

    const editCurrentTask = (newTask, newGoals) => {
        api.editTask(token, newTask, newGoals, id).then(data => getData(data.tasks.data, data.goals.data))
    }

    const animateRiver = (duration, timeElapsed) => { // these values are in seconds 
        let percent = (100 * timeElapsed) / duration
        let offset = 360 - ((360 * percent) / 100)
        
        if (!!river) river.style.strokeDashoffset = `${offset}px`
    }

    return (
        <Container>
            <Banner>
                <GoalPageBanner />
            </Banner>
            <ButtonContainer>
                <MenuButton showMenu={ showMenu } menuToggled={ menuToggled } />
            </ButtonContainer>
            <Menu menuToggled={ menuToggled } showTaskMenu={ showTaskMenu } showEditMenu={ showEditMenu } editMenu={ true } />
            <TaskMenu css={ positionMenu } menuToggled={ taskMenuToggled } submitTask={ createTask } />
            <EditMenu css={ positionMenu } menuToggled={ editMenuToggled } submitTask={ editCurrentTask }  createGoals={ createGoals } currentTask={ task } currentGoals={ allGoals } />
            <Grid>
                { allGoals ? allGoals.map((goal, i) => <Goal key={ i } goal={ goal } animateRiver={ animateRiver } />) : '' }
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    const { goals, tasks } = state.userData
    return {
        goals,
        tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadData: token => dispatch(userData(token)),
        getData: (tasks, goals) => dispatch(loadUserData(tasks, goals))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GoalPage)