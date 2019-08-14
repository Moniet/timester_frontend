/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { colors, mq } from '../styles/theme'
import { daysInMonth, getMonth, formatTime } from '../utils/dateUtils'
import Container from './Container'
import TaskMenu from './TaskMenu'
import MenuButton from './MenuButton'
import { userData } from '../actions/userDataActions'
import Goal from './Goal'
import { getCurrentTime, getMinutes } from '../utils/timeUtils'
import { Link } from 'react-router-dom'

const Banner = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 5rem;
`

const BannerContainer = styled.div`
    width: 100%;
    height: 45%;
    display: grid;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to top, ${colors.secondary}, ${colors.tertiary})
`

const BannerHeader = styled.h1`
  
`

const SvgContainer = styled.div`
    display: grid;
    justify-content: center;
`

const Grid  = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 40px;
    width: 80%;
    margin: 5rem auto;
    grid-gap: 0.25rem;
`

const Day = styled.div`
    padding: 0.5rem;
    border: solid 1px white;
    width: 40px;
    height: 40px;
    text-align: center;
    background: rgba(0,0,0,0.15);
`

// render calendar based on the current month 
// click on any of them to render the task page for that day

const Calendar = ({ tasks, dispatch }) => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const daysNum = daysInMonth(month, year)
    let token = localStorage.getItem('token')

    useEffect(() => {
        if (tasks.length === 0 && token !== 'false') dispatch(userData(localStorage.getItem('token')));
    })

    return (
        <Container>
            <BannerContainer>
                <Banner>
                    <SvgContainer>
                        <svg xmlns="http://www.w3.org/2000/svg" width="159" height="199" viewBox="0 0 159 199"><text transform="translate(1 158)" fill="rgba(255,255,255,0.13)" stroke="#fff" strokeWidth="1" fontSize="149" fontFamily="DroidSansMono, Droid Sans Mono" letterSpacing="-0.15em" opacity="0.958"><tspan x="0" y="0">{ year.toString().slice(2) }</tspan></text></svg> 
                    </SvgContainer>
                    <BannerHeader className="banner-header">{ getMonth(month) }</BannerHeader>
                </Banner>
                {/* <MenuButton showMenu={ showMenu } /> */}
            </BannerContainer>
            {/* <TaskMenu menuToggled={ menuToggled }/> */}
            <Grid>
                { Array(daysNum).fill('').map((n, i) => {
                    return ( 

                        <Link to={`/tasks/${year}-${formatTime(month+1)}-${formatTime(i+1)}`}><Day>{ i + 1 }</Day></Link>
                    )
                    } 
                )}
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    const { tasks } = state.userData
    return {
        tasks
    }
}

export default connect(mapStateToProps, null)(Calendar)


 