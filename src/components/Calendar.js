/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { colors, mq } from '../styles/theme'
import { daysInMonth, getMonth, formatTime } from '../utils/dateUtils'
import Container from './Container'
import { userData } from '../actions/userDataActions'
import { Link } from 'react-router-dom'
import MenuButton from './MenuButton'
import Menu from './Menu'
import TaskMenu from './TaskMenu'
import api from '../adapters/api'

const Banner = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 5rem;
    z-index: 1000;
`

const BannerContainer = styled.div`
    width: 100%;
    height: 45%;
    display: grid;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to top, ${colors.secondary}, ${colors.tertiary});
    clip-path: polygon(0 0, 100% 0, 100% 75%, 66% 89%, 29% 90%, 0 100%);
`

const BannerHeader = styled.h1`
  margin-top: -2rem;
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
    position: relative;
    padding: 0.5rem;
    border: solid 1px white;
    width: 100%;
    height: 100%;
    text-align: center;
    background: rgba(0,0,0,0.15);
    a {
        position: absolute;
        color: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const button = css`
    margin-bottom: -1rem;
`

const Calendar = ({ tasks, dispatch, loadUserData }) => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const daysNum = daysInMonth(month, year)
    let token = localStorage.getItem('token')
    const [menuToggled, toggleMenu] = useState(false)
    const [taskMenuToggled, toggleTaskMenu] = useState(false)

    useEffect(() => {
        if (tasks.length === 0 && token !== 'false') 
            loadUserData(localStorage.getItem('token'));
    })

    const showTaskMenu = () => toggleTaskMenu(!taskMenuToggled)
    const submitTask = (task, goals) => api.createTasks(token, task, goals).then(loadUserData(token))

    const showMenu = () => {
        if (taskMenuToggled && menuToggled) {
            toggleTaskMenu(!taskMenuToggled)
        } else {
            toggleMenu(!menuToggled)
        }
    }

    return (
        <Container>
            <BannerContainer>
                <Banner>
                    <SvgContainer>
                        <svg xmlns="http://www.w3.org/2000/svg" width="159" height="199" viewBox="0 0 159 199"><text transform="translate(1 158)" fill="rgba(255,255,255,0.13)" stroke="#fff" strokeWidth="1" fontSize="149" fontFamily="DroidSansMono, Droid Sans Mono" letterSpacing="-0.15em" opacity="0.958"><tspan x="0" y="0">{ year.toString().slice(2) }</tspan></text></svg> 
                    </SvgContainer>
                    <BannerHeader className="banner-header">{ getMonth(month) }</BannerHeader>
                </Banner>
            </BannerContainer>
            <Menu menuToggled={ menuToggled } showTaskMenu={ showTaskMenu }/>
            <MenuButton css={button}  showMenu={ showMenu } menuToggled={ menuToggled }/>
            <TaskMenu menuToggled={ taskMenuToggled } submitTask={ submitTask }/>
            <Grid>
                { Array(daysNum).fill('').map((n, i) => {
                        return (
                            <Day key={i} css={ css`${((i+1 === day) ?  'background:' + colors.tertiary + '; font-weight: bold;' : '')}` }>
                                <Link to={`/tasks/${year}-${formatTime(month+1)}-${formatTime(i+1)}`}>{ i + 1 }</Link>
                            </Day>
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

const mapDispatchToProps = dispatch => {
    return {
        loadUserData: token => dispatch(userData(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)


 