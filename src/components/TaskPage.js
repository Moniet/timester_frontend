import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { colors, mq } from '../styles/theme'
import { readableDay, readableMonth } from '../utils/dateUtils'
import Grid from './Grid'
import Container from './Container'
import Task from './Task'

const DateContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin-top: -2rem;
`

const MonthYear = styled.div`
    color: white;
    letter-spacing: 5px;
    font-weight: 300;
    font-size: 0.75em;
    margin-top: -1.5rem;
`

const Banner = styled.div`
    position: relative;
    width: 100%;
    background: linear-gradient(30deg, ${colors.secondary}, ${colors.primary});

    ${mq[0]} {
        height: 50%;
        clip-path: polygon(50% 0%, 100% 0, 100% 68%, 79% 80%, 58% 80%, 37% 87%, 19% 87%, 0 100%, 0% 35%, 0 0);
    }
`

const BannerHeader = styled.h1`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const TaskPage = ({ match, tasks }) => {
    const date = new Date(match.params.date)
    const day = readableDay(date)
    const dayNum = match.params.date.split('-')[2]

    return (
        <Container>
            <Banner>
            
                <DateContainer>
                    <svg xmlns="http://www.w3.org/2000/svg" width="159" height="199" viewBox="0 0 159 199"><text transform="translate(1 158)" fill="rgba(255,255,255,0.13)" stroke="#fff" strokeWidth="1" fontSize="149" fontFamily="DroidSansMono, Droid Sans Mono" letterSpacing="-0.15em" opacity="0.958"><tspan x="0" y="0">{ dayNum }</tspan></text></svg>
                    <MonthYear>{ readableMonth(date) } { date.getFullYear() }</MonthYear>
                </DateContainer>
                <BannerHeader className="banner-header">{ day }</BannerHeader>
            </Banner>
            <Grid>
                { tasks.filter(task => task.attributes.date === match.params.date)
                    .map((task, i) => <Task task={ task } gridSize={ 25 } key={i} />) 
                }
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

export default connect(mapStateToProps, null)(TaskPage)