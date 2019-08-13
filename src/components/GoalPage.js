/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { colors, mq } from '../styles/theme'
import { readableDay, readableMonth } from '../utils/dateUtils'
import Grid from './Grid'
import Container from './Container'
import Task from './Task'
import MenuButton from './MenuButton' 
import { continueStatement } from '@babel/types';
import { userData } from '../actions/userDataActions'

const Banner = styled.div`
    position: relative;
    width: 100%;
    overflow-x: hidden;

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
        allGoals = goals.filter(goal => parseInt(goal.task_id) === parseInt(match.params.id))
    }



    return (
        <Container>
            <Banner>
                <Img css={css} src={require('../assets/img/goalpage-banner.svg')} alt="animation"/>
            </Banner>
            <Grid>
                { allGoals ? allGoals.map(goal => <div>{ goal.title }</div>) : <div>no goals</div> }
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    const { goals } = state
    return {
        goals
    }
}

export default connect(mapStateToProps, null)(GoalPage)