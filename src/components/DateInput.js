/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { daysInMonth, formatTime } from '../utils/dateUtils'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

`

const select = css`
    border: none;
    border-bottom: solid black 2px;
    padding: 1rem 0.5rem 0.5rem 0;
    margin-top: 0.25rem;
    background: transparent;
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
`

const Label = styled.label`
    font-weight: 300;
    color: gray;
    padding-bottom: -2rem;
`
const DateInput = ({ setValue, currentDate }) => {
    const dateArr = currentDate ? currentDate.split('-') : [];
    const months = Array(12).fill('')
    const days = Array(daysInMonth(parseInt(dateArr[1]), parseInt(dateArr[0]))).fill('')
    const numYears = Array(11).fill('')
    const years = numYears.map((y, i) => parseInt(dateArr[0]) + i)

    const [day, setDay] = useState(parseInt(dateArr[2]))
    const [month, setMonth] = useState(parseInt(dateArr[1]))
    const [year, setYear] = useState(parseInt(dateArr[0]))

    useEffect(() => {
        setValue(`${year}-${formatTime(month)}-${formatTime(day)}`);
    }, [day, month, year]);

    return (
        <Container>
            {/* DAYS */}
            <div> 
                <Label>dd </Label>
                <select css={select} onChange={e => setDay(e.target.value)}>
                    { days.map((d, i) => <option value={ i + 1 } key={ i } selected={ (i + 1) === day }> { i + 1 } </option>) }
                </select>
            </div>
            {/* MONTH */}
            <div>
                <Label>mm </Label>
                <select css={select}  onChange={e => setMonth(e.target.value) }>
                    { months.map((m, i) => <option value={ i + 1 } key={ i } selected={ (i + 1) === month }>{ i + 1 }</option>) }
                </select>
            </div>
            {/* YEAR */}
            <div>
                <Label>yy </Label>
                <select css={select}  onChange={e => setYear(e.target.value) }>
                    { years.map((y, i) => <option value={ y } key={ i } selected={ parseInt(y) === year }>{ y }</option>) }
                </select>
            </div>
        </Container>
    )
}

export default DateInput 