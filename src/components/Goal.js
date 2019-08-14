/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import styled from '@emotion/styled'
import { colors, mq } from '../styles/theme'
import { formatToHours, formatTime } from '../utils/dateUtils'
import { getMinutes, getFormattedDate } from '../utils/timeUtils'

const Container = styled.div`
    grid-column-end: span 2;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: ${props => props.gridRowTemplate};
    align-items: center;
    grid-row-end: span 3;
    margin-bottom: 2rem;
    background: ${colors.bg}
`

const Time = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    color: ${colors.textLight};
    grid-column: span 1;
    background: ${colors.bg};
    width: 100%;
    height: 100%;
`

const Title = styled.div `
    position: relative;
    display: grid;
    align-items: center;
    justify-content: center;
    color: black;
    ${mq[0]} {
        max-width: 180px;
        min-height: 70px;
        grid-column: span 3;
        padding: 1rem;
        margin-left: 2rem;
        box-shadow: 5px 5px 0px rgba(0,0,0,0.25);
    }

    &:before {
        content: '';
        z-index: -1;
        width: 20px;
        position: absolute;
        left: 1px;
        transform: translateX(-100%) rotate(-90deg);
        background: ${props => props.titleBackground};
        height: 20px;
        clip-path: polygon(50% 0, 0% 100%, 100% 100%);
    }

    background: ${props => props.titleBackground};
    z-index: 1;
`
const Timeline = styled.div`
    width: 50%;
    height: 100%;
    margin-left: 50%;
    border-left: solid 2px white;
    grid-column-end: span 1;
    z-index: 2;
`

const TimelineContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-end: span 4;
    z-index: 0;
    height: 100%;
`

const span3 = css`
    grid-column-end: span 3;
`

const Goal = ({ goal, time, animateRiver }) => {
    const { hour, minutes, seconds } = time
    const currentTime = `${formatTime(hour)}:${formatTime(minutes)}`
    const startHour = formatToHours(goal.attributes.start_time)
    const endHour = formatToHours(goal.attributes.end_time)
    const startTime = new Date(goal.attributes.start_time)
    const currentDate = new Date(`2000-01-01T${currentTime}:${formatTime(seconds)}`)
    const endTime = new Date(goal.attributes.end_time)
    const duration = (endTime - startTime) / 1000 // converts ms to secs

    const timeElapsed = (currentDate - startTime) / 1000
    
    const rowTemplate = (duration > 3600 ? '1fr 200px 1fr' : '1fr 100px 1fr')
    const hourBool = currentTime > startHour && currentTime < endHour
    const titleBackground = hourBool ? colors.primary : '#FFFDE4'
    
    if (hourBool) animateRiver(duration, timeElapsed);
    
    return (
        <Container gridRowTemplate={rowTemplate}>
            <Time>{ formatToHours(goal.attributes.start_time) }</Time>
            <Title titleBackground={titleBackground}>{ goal.attributes.title }</Title>
            <TimelineContainer>
                <Timeline />
            </TimelineContainer>
            <Time>{ formatToHours(goal.attributes.end_time) }</Time>
        </Container>
    )
}

export default Goal