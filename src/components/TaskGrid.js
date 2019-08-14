import React from 'react'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { colors, mq } from '../styles/theme'
import Task from './Task'
import TaskPage from './TaskPage'
import Grid from './Grid'
import { formatToHours, readableDate } from '../utils/dateUtils'

const gridSize = 25;

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

    const taskEls = () => {
        return dates.reverse().map(date => {
            let allTasks = tasks.filter(tasks => tasks.attributes.date === date)
            return (
                <> 
                    <DateHeader >
                        <Link to={`/tasks/${date}`} >
                            { readableDate(date) }
                        </Link>
                    </DateHeader>
                    { allTasks.map(task => <Task task={ task } gridSize={ gridSize } key={ parseInt(task.id) } />) }
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

// when you click the date it should route to new url
// new url should result in the mother fucking page being rendered

export default TaskGrid