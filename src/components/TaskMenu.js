import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import TaskItem from './TaskItem'
import GoalItem from './GoalItem'
import { colors, styles } from '../styles/theme'
import { connect } from 'react-redux'
import { userData } from '../actions/userDataActions'
import api from '../adapters/api'

const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: white;
    overflow-y: scroll;
    z-index: 1;
    top: 0;
    display: flex;
    justify-content: center;
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

const TaskMenu = ({ token, getTasks }) => {
    const [goalNumber, setGoalNum] = useState(1)
    const [startTime, setStartTime] = useState('')

    useEffect(() => {
        console.log(startTime)
    })

    const addGoal = () => {
        setGoalNum(goalNumber + 1)
    }

    const handleSubmit = () => {
        console.log()
    }

    return (
        <Container>
            <ItemsContainer>
                <TaskItem setStartTime={ setStartTime } />
                <ButtonContainer>
                    <AddGoalButton onClick={ () => addGoal()}>Add Goal</AddGoalButton>
                </ButtonContainer>

                { Array(goalNumber).fill('').map((n, i) => <GoalItem key={i} />) }

                <ButtonContainer>
                    <CreateButton onClick={ () => handleSubmit() }>Create</CreateButton>
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

const mapDispatchToProps = dispatch => {
    return {
        getTasks: (token) => dispatch(userData(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskMenu)