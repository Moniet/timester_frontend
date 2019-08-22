import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import TaskItem from './TaskItem'
import GoalItem from './GoalItem'
import { colors, styles } from '../styles/theme'
import { connect } from 'react-redux'
import { userData } from '../actions/userDataActions'
import api from '../adapters/api'
import { TweenLite } from "gsap/TweenMax"

const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: white;
    overflow-y: scroll;
    z-index: 500;
    top: 0;
    display: flex;
    justify-content: center;
    opacity: 0;
    transform: translateY(-100%);
`

const ItemsContainer = styled.div`
    position: absolute;
    top: 40%;
    width: 90%;
    margin: 0 auto;
`

const AddGoalButton = styled.button`
    background: ${colors.menu};
    margin-top: 1rem;
    padding: 0.25em;
    color: white;
    font-weight: 700;
    text-align: center;
    width: 100px;
    border-radius: ${styles.borderRadius};
    border: none;
    outline: none;
`

const CreateButton = styled.button`
    width: 200px;
    padding: 1rem;
    background: ${colors.button};
    color: white;
    font-weight: 700;
    border: none;
    border-radius: ${styles.borderRadius};
    margin: 1rem 0;
    outline: none;
`

const ButtonContainer = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
    cursor: pointer;
`

const EditMenu = ({ token, menuToggled, currentTask, currentGoals, submitTask }) => {
    const [goalNumber, setGoalNum] = useState(0)
    const [task, setTask] = useState({})
    const [goals, setGoals] = useState([])
    
    useEffect(() => {
        const el = document.querySelector('.edit-menu-container');
        if (menuToggled) TweenLite.to(el, 1, {y: 0, opacity: 1});
        if (!menuToggled) TweenLite.to(el, 1, {y: -1000, opacity: 0});
        if (Object.keys(task).length === 0) setTask({...currentTask })
        if (goals.length === 0 && currentGoals.length !== 0) setGoals(currentGoals.map((goal, i) => Object.assign(goal.attributes, {id: goal.id})));
    }, [task, goals, goalNumber, menuToggled, currentTask, currentGoals])

    const newGoalItem = () => {
        setGoalNum(goalNumber + 1)
    }
    
    const handleSubmit = () => {
        if (task.title && goals.length > 0) {
            submitTask(task, goals)
            setTask({})
            setGoals([])
        }
    }

    const addGoal = (goal) => {
        const goalExists = goals.find(g => g.id === goal.id)
 
        if (!!goalExists) setGoals([...goals.filter(g => g.id !== goal.id), goal])
        if (!goalExists) setGoals([...goals, goal])
    }

    return (
        <Container className="edit-menu-container">
            <ItemsContainer>
                <TaskItem setTask={ setTask } task={ task } />
                <ButtonContainer>
                    <AddGoalButton onClick={ () => newGoalItem()}>Add Goal</AddGoalButton>
                </ButtonContainer>

                { Array(goalNumber).fill('').map((n, i) => <GoalItem setValue={ addGoal } key={ i } goalId={ (currentGoals.length + 1) + i } />) }

                { currentGoals ? currentGoals.map((goal, i) => <GoalItem setValue={ addGoal } key={ i } goalId={ goal.id } goal={ goal.attributes } />) : '' }

                <ButtonContainer>
                    <CreateButton onClick={ () => handleSubmit() }>Update Task</CreateButton>
                </ButtonContainer> 
            </ItemsContainer>
        </Container>
    )
}

const mapStateToProps = (state) => {
    const { token } = state;
    return {
        token: token.token
    }
}

export default connect(mapStateToProps, null)(EditMenu)