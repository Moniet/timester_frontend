/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useEffect, useRef } from 'react'
import  { Link } from 'react-router-dom'
import styled from '@emotion/styled/macro'
import { css } from '@emotion/core'
import { colors, mq, styles, gradients } from '../styles/theme'
import { formatToHours } from '../utils/dateUtils.js'
import { getGridSize } from '../utils/gridUtils'

const container = css`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    box-shadow: ${styles.shadowDark};

    ${mq[0]} {
        border-radius: ${styles.borderRadius};
        padding: 0.75em;
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
    z-index: 100;
`

const TaskTime = styled.p`
    color: black;
    font-weight: 300;
    font-size: 0.75em;
    grid-row-end: span 2;
    z-index: 100;
`

const Backdrop = styled.img`
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    z-index: 0;
`

const DataContainer = styled.div`
    z-index: 100;
    width: 100%;
    height: 100%;
`

const Task = ({ task }) => {
    let rowSpan = 2
    const taskDiv = useRef(null)
    const taskContainer = useRef(null)
    const taskTime = useRef(null)
    const backdrop = useRef(null)
    const startTime = formatToHours(task.attributes.start_time)
    const endTime = formatToHours(task.attributes.end_time)    

    useEffect(() => {
        const height = taskDiv.current.clientHeight + taskTime.current.clientHeight + 8;
        rowSpan = Math.ceil(height / (getGridSize() + 8))        
        taskContainer.current.style.gridRowEnd = `span ${rowSpan}`
        backdrop.current.src = rowSpan > 2 ? require('../assets/img/large-task-gradient.svg') : require('../assets/img/small-task-gradient.svg')
    }, [])

    return (
        <div css={container}ref={taskContainer}>
            <DataContainer>
                <Link to={`/goals/${task.id}`}>
                    <TaskHeader ref={taskDiv}>{ task.attributes.title }</TaskHeader>
                    <TaskTime ref={taskTime}> {startTime} - {endTime}</TaskTime>
                </Link>
            </DataContainer>
            <Backdrop ref={ backdrop }/>
        </div>
    )
}

export default Task