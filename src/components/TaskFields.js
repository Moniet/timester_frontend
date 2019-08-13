/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import MenuInput from './MenuInput'
import DateInput from './DateInput'
import TimeInput from './TimeInput'
import { log } from 'util';

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

const TaskFields = ({ setStartTime }) => {
    return (
        <>
            <Full>
                <Label css={textCenter}>Task Title</Label>
                <MenuInput onKeyDown={ e => console.log(e.target.value)} />
            </Full>

            <Half>
                <Label>Start Time</Label>
                <TimeInput key={Math.random()} onInput={ e => console.log(e.target.value)}/>
            </Half>
                
            <Half>
                <Label>End Time</Label>
                <TimeInput key={Math.random()} onInput={ () => "" } />
            </Half>
        </>
    )
}

export default TaskFields

