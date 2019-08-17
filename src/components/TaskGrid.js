import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { colors } from '../styles/theme'
import Task from './Task'
import Grid from './Grid'
import {  readableDate } from '../utils/dateUtils'

const DateHeader = styled.h2`
    a { 
        color: ${colors.primary}; 
        cursor: pointer;
    }
    margin-top: 2em;
    margin-left: 0.25em;
    grid-column: span 2;
    grid-row-end: span 2;
    align-self: flex-start;
    font-weight: 500;
    cursor: pointer;
`

const TaskGrid = ({ tasks }) => {
    const allDates = tasks.map(task => task.attributes.date);
    const dates = [...new Set(allDates)]

    const taskEls = () => { // mapping all the tasks on a particular day | prints the tasks with the date
        return dates.reverse().map((date, i) => {
            let allTasks = tasks.filter(tasks => tasks.attributes.date === date)
            return (
                <> 
                    <DateHeader key={i}>
                        <Link to={`/tasks/${date}`} >
                            { readableDate(date) }
                        </Link>
                    </DateHeader>
                    { allTasks.map(task => <Task task={ task } key={ parseInt(task.id) } />) }
                </>
            )
        })
    }

    return (

            <Grid>  
                { taskEls() }
            </Grid>
            
    )
}

export default TaskGrid