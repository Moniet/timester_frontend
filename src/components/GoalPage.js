/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { colors, mq } from '../styles/theme'
import { readableDay, readableMonth } from '../utils/dateUtils'
import Container from './Container'
import Task from './Task'
import MenuButton from './MenuButton'
import { userData } from '../actions/userDataActions'
import Goal from './Goal'

const Banner = styled.div`
    position: relative;
    width: 100%;
    overflow-x: hidden;
    margin-bottom: 2rem;
    ${mq[0]} {
        height: 50%;
    }
`
const Img = styled.img`
    width: 152%;
    height: auto;
    transform: translateX(-15%);
`
// get the goals for a particular task
// sort the goals by ascending time
// render the goals
// make box span rows based on time interval 
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: ${colors.bg};
`

const GoalPage = ({ match, goals, dispatch }) => {
    let token = localStorage.getItem('token')
    let allGoals; 

    useEffect(() => {
        if (!goals && token !== 'false') {
            dispatch(userData(token))
        }
        console.log(goals);
    }, [goals])

    if (goals) {
        allGoals = goals.filter(goal => parseInt(goal.attributes.task_id) === parseInt(match.params.id))
    }

    return (
        <Container>
            <Banner>
                <Img css={css} src={require('../assets/img/goalpage-banner.svg')} alt="animation"/>
            </Banner>
            <Grid>
                { allGoals ? allGoals.map(goal => <Goal goal={goal} />) : <div>no goal homes</div> }
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    const { goals } = state.userData
    return {
        goals
    }
}

export default connect(mapStateToProps, null)(GoalPage)