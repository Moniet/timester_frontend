/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import React, {useEffect, useRef} from 'react'
import { generateTimes } from '../utils/dateUtils'

const select = css`
    border: none;
    border-bottom: solid black 2px;
    padding: 1rem 0.5rem 0.5rem 0;
    margin-top: 0.25rem;
    background: transparent;
    outline: none;
`

const DateInput = ({ setValue, value }) => {
    let times = generateTimes();
    let input = useRef();

    useEffect(() => {
        input.current.value = value
    }, [input])

    return (
        <select css={select} onChange={e => setValue(e.target.value)} ref={input}>
            { times.map(t => <option value={ t }>{ t }</option>) }
        </select>
    )
}

export default DateInput 