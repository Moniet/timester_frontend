import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import MenuInput from './MenuInput'
import TimeInput from './TimeInput'
import { formatToHours } from '../utils/dateUtils'

const MenuContainer = styled.div`
    position: relative;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 3rem;
    grid-gap: 2.5em;
    padding: 3rem 0;
    width: 100%;
    border-bottom: dashed 1px lightgray;
`

const Full = styled.div`
    grid-column: span 2;
    display: grid;
`

const Half = styled.div`
    grid-column: span 1;
    display: grid;
`

const Label = styled.label`
    color: black;
`


const GoalItem = ({ setValue, goal, goalId }) => {
    const [currentGoal, setGoal] = useState({id: goalId, ...goal});    

    const updateGoal = (goal) => {
        setGoal(goal)
        setValue(goal)
    }

    return (
        <MenuContainer>
            <Full>
                <Label>Goal Title</Label>
                <MenuInput setValue={title => updateGoal({...currentGoal, title })} value={ currentGoal.title }/>
            </Full>

            <Half>
                <Label>Start Time</Label>
                <TimeInput setValue={start_time => updateGoal({ ...currentGoal, start_time })} value={ currentGoal.start_time } />
            </Half>

            <Half>
                <Label>End Time</Label>
                <TimeInput setValue={end_time => updateGoal({ ...currentGoal, end_time })} value={ currentGoal.end_time }/>
            </Half>
        </MenuContainer>
    )
}

export default GoalItem