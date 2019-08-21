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
    const [title, setTitle] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    useEffect(() => {
        if (title !== '' && startTime !== '' && endTime !== '') {
            setValue({id: goalId, title, start_time: startTime, end_time: endTime })            
        }
    }, [title, startTime, endTime]);    

    if (goal) console.log(formatToHours(goal.start_time))
    

    return (
        <MenuContainer>
            <Full>
                <Label>Goal Title</Label>
                <MenuInput setValue={setTitle} value={ goal ? goal.title : '' }/>
            </Full>

            <Half>
                <Label>Start Time</Label>
                <TimeInput setValue={setStartTime} value={ goal ? goal.start_time : '' } />
            </Half>

            <Half>
                <Label>End Time</Label>
                <TimeInput setValue={setEndTime} value={ goal ? goal.end_time : '' }/>
            </Half>
        </MenuContainer>
    )
}

export default GoalItem