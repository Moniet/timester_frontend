/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import MenuInput from './MenuInput'
import TimeInput from './TimeInput'

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

const GoalItem = () => {
    const [title, setTitle] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    useEffect(() => {
        console.log(title)
    }, [title]);

    return (
        <MenuContainer>
            <Full>
                <Label>Goal Title</Label>
                <MenuInput key={Math.random()} onChange={e => setTitle(e.target.value)} />
            </Full>

            <Half>
                <Label>Start Time</Label>
                <TimeInput key={Math.random()}/>
            </Half>

            <Half>
                <Label>End Time</Label>
                <TimeInput key={Math.random()}/>
            </Half>
        </MenuContainer>
    )
}

export default GoalItem