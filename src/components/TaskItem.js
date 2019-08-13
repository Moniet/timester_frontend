/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import MenuInput from './MenuInput'
import DateInput from './DateInput'
import TimeInput from './TimeInput'
import TaskFields from './TaskFields'

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

const Label = styled.label`
    color: black;
`

const TaskItem = ({ setStartTime }) => {
    const  [task, setTask] = useState({})
    const  [date, setDate] = useState('')
    useEffect(() => {
        console.log(task);
        // createTask(task)
    }, [task])

    const addDate = (newDate) => {
        setTask({
            date: newDate
        })
        console.log(task)
    }

    const addTask = newTask => {
        setTask({
            ...task,
            newTask
        })
    }

    return (
        <MenuContainer>
            <TaskFields setStartTime={ setStartTime } />
            <Full>
                <Label> Date </Label>
                <DateInput setDate={ addDate } />
            </Full>
        </MenuContainer>
    )
}

export default TaskItem