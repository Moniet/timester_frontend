/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import styled from '@emotion/styled'
import MenuInput from './MenuInput'
import DateInput from './DateInput'
import TimeInput from './TimeInput'
import { getFormattedDate, formatToUTC } from '../utils/timeUtils'

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

const textCenter = css`
    text-align: center;
`

const TaskItem = ({ task, setTask }) => {
    const taskExist = (Object.keys(task).length > 1)
    if (task.start_time > task.end_time) setTask({ ...task, start_time: task.end_time  });
    
    return (
        <MenuContainer>
            <Full>
                <Label css={textCenter}>Task Title</Label>
                <MenuInput setValue={ title => setTask({...task, title})} value={ taskExist ? task.title : '' } />
            </Full>

            <Half>
                <Label>Start Time</Label>
                <TimeInput setValue={ start_time => setTask({...task, start_time}) } value={ formatToUTC(task.start_time) } />
            </Half>
                
            <Half>
                <Label>End Time</Label>
                <TimeInput setValue={ end_time => setTask({...task, end_time})} value={ formatToUTC(task.end_time) } />
            </Half>

            <Full>
                <Label>Date</Label>
                <DateInput setValue={date => setTask({...task, date})} currentDate={ taskExist ? task.date : getFormattedDate(new Date()) }/>
            </Full>
        </MenuContainer>
    )
}

export default TaskItem