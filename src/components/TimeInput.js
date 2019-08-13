/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import { generateTimes } from '../utils/dateUtils'


const Select = styled.select`
    border: none;
    border-bottom: solid black 2px;
    padding: 1rem 0.5rem 0.5rem 0;
    margin-top: 0.25rem;
    background: transparent;
    outline: none;
`


const DateInput = () => {
    let times = generateTimes();

    return (
        <Select>
            { times.map(t => <option>{ t }</option>) }
        </Select>
    )
}

export default DateInput 