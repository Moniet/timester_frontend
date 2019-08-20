/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { daysInMonth } from '../utils/dateUtils'

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
`

const Label = styled.label`
    font-weight: 300;
    color: gray;
    padding-bottom: -2rem;
`
const DateInput = ({ setValue, currentDate }) => {
    let months = Array(12).fill('')
    const date = new Date()
    const currentYear = date.getFullYear()
    const numYears = Array(11).fill('')
    const years = numYears.map((y, i) => currentYear + i)

    const [day, setDay] = useState(1)
    const [month, setMonth] = useState(1)
    const [year, setYear] = useState(currentYear)
    const dateArr = (currentDate && !day && !month && !!year) ? currentDate.split('-') : '';

    let days = Array(daysInMonth(month, currentYear)).fill('')

    useEffect(() => {
        setValue(`${year}-${month}-${day}`)
        console.log(currentDate);
    }, [day, month, year]);

    return (
        <Container>
            <div>
                <Label>dd/ </Label>
                <select onChange={e => setDay(e.target.value)} value={ dateArr[2] }>
                    { days.map((d, i) => <option value={ i + 1 } key={ i }>{ i + 1 }</option>) }
                </select>
            </div>

            <div>
                <Label>mm/ </Label>
                <select onChange={e => setMonth(e.target.value) } value={ dateArr[1] }>
                    { months.map((m, i) => <option value={ i + 1 } key={ i }>{ i + 1 }</option>) }
                </select>
            </div>

            <div>
                <Label>yy</Label>
                <select onChange={e => setYear(e.target.value) } value={ dateArr[0] }>
                    { years.map((y, i) => <option value={ i + 1 } key={ i }>{ y }</option>) }
                </select>
            </div>
        </Container>
    )
}

export default DateInput 