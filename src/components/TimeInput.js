/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import React, {useEffect, useRef} from 'react'
import { generateTimes, formatToHours } from '../utils/dateUtils'


const select = css`
    border: none;
    border-bottom: solid black 2px;
    padding: 1rem 0.5rem 0.5rem 0;
    margin-top: 0.25rem;
    background: transparent;
    outline: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    color: black;
`

const DateInput = ({ setValue, value }) => {
    let times = generateTimes();    

    return (
        <select css={select} onChange={e => setValue(e.target.value)}>
            { times.map(t => <option value={t} selected={formatToHours(value) === t}> {t} </option>) }
        </select>
    )
}

export default DateInput 