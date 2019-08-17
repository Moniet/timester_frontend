/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'
import { daysInMonth } from '../utils/dateUtils'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

`

const Select = styled.select`
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
const DateInput = ({ setValue }) => {
    let months = Array(12).fill('');
    const date = new Date()
    const currentYear = date.getFullYear()
    const numYears = Array(11).fill('')
    const years = numYears.map((y, i) => currentYear + i)

    const [day, setDay] = useState(1)
    const [month, setMonth] = useState(1)
    const [year, setYear] = useState(currentYear)

    let days = Array(daysInMonth(month, currentYear)).fill('')

    useEffect(() => {
        setValue(`${year}-${month}-${day}`)
    }, [day, month, year]);

    return (
        <Container>
            <div>
                <Label>dd/ </Label>
                <Select key={ Math.random() } onChange={e => setDay(e.target.value)} value={day}>
                    { days.map((d, i) => <option key={ i }>{ i + 1 }</option>) }
                </Select>
            </div>

            <div>
                <Label>mm/ </Label>
                <Select key={ Math.random() } onChange={e => setMonth(e.target.value) }>
                    { months.map((m, i) => <option key={ i }>{ i + 1 }</option>) }
                </Select>
            </div>

            <div>
                <Label>yy</Label>
                <Select key={ Math.random() } onChange={e => setYear(e.target.value) }>
                    { years.map((y, i) => <option key={ i }>{ y }</option>) }
                </Select>
            </div>
        </Container>
    )
}

export default DateInput 