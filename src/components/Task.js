/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useEffect } from 'react'
import  { Link } from 'react-router-dom'
import styled from '@emotion/styled/macro'
import { css } from '@emotion/core'
import { colors, mq, styles } from '../styles/theme'
import { formatToHours } from '../utils/dateUtils.js'

let num = Math.floor(Math.random())

const container = css`
    ${mq[0]} {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        border-radius: ${styles.borderRadius};
        padding: 0.75em;
        background-image: ${styles.gradients[num]};
        word-break: break-all;
    }

    &:hover {
        cursor: pointer;
    }
`

const TaskHeader = styled.h3`
    color: white;
    font-weight: 400;
    margin-bottom: 0.5em;
`

const TaskTime = styled.p`
    color: black;
    font-weight: 300;
    font-size: 0.75em;
    grid-row-end: span 2;
`

const Task = ({ task, gridSize }) => {
    const taskDiv = React.createRef()
    const taskContainer = React.createRef()
    const taskTime = React.createRef()
    useEffect(() => {
        const height = taskDiv.current.clientHeight + taskTime.current.clientHeight + 8;
        const rowSpan = Math.ceil(height / (gridSize + 8))
        taskContainer.current.style.gridRowEnd = `span ${rowSpan}`
    })

    const startTime = formatToHours(task.attributes.start_time)
    const endTime = formatToHours(task.attributes.end_time)

    return (
        <div css={container} ref={taskContainer}>
            <Link to={`/goals/${task.id}`}>
                <TaskHeader ref={taskDiv}>{ task.attributes.title }</TaskHeader>
                <TaskTime ref={taskTime}> {startTime} - {endTime}</TaskTime>
            </Link>
        </div>
    )
}

export default Task
