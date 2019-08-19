/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { colors, mq } from '../styles/theme'
import { formatTime} from '../utils/dateUtils'
import { userData } from '../actions/userDataActions'
import { getCurrentTime } from '../utils/timeUtils'
import api from '../adapters/api'
import Container from './Container'
import Goal from './Goal'
import MenuButton from './MenuButton'
import Menu from './Menu'
import TaskMenu from './TaskMenu';

const Banner = styled.div`
    position: relative;
    width: 100%;
    overflow-x: hidden;
    z-index: 2000;

    ${mq[0]} {
       margin-bottom: 3rem;
   }
`

const Img = styled.img`
    width: 152%;
    height: auto;
    transform: translateX(-15%);
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: ${colors.bg};
`

const riverStroke = css`
    stroke-dashoffset: 360px;
    stroke-dasharray: 360px;
`

const ButtonContainer = styled.div`
    position: relative;
    margin-bottom: 6rem;
`

const GoalPage = ({ match, goals, tasks, loadUserData}) => {
    let token = localStorage.getItem('token')
    let allGoals; 
    let river = document.querySelector('#river-front')
    let time = getCurrentTime();
    const [menuToggled, toggleMenu] = useState(false)
    const [taskMenuToggled, toggleTaskMenu] = useState(false)
    let id = match.params.id; 
    let task;
    let currentGoals;
    setTimeout(() => { time = getCurrentTime() }, 1000)

    if (goals.length !== 0) {
        id =  parseInt(goals[0].attributes.task_id)
        task = tasks.find(t => parseInt(t.id) === id).attributes
    }

    if (goals) {
        allGoals = goals.filter(goal => parseInt(goal.attributes.task_id) === parseInt(match.params.id))
    }
    
    useEffect(() => {
        if (goals.length === 0 && token !== 'false') loadUserData(localStorage.getItem('token'));
    }, [goals, tasks, match])

    const showMenu = () => {
        if (taskMenuToggled && menuToggled) {
            toggleTaskMenu(!taskMenuToggled)
        } else {
            toggleMenu(!menuToggled)
        }
    }

    const showTaskMenu = () => toggleTaskMenu(!taskMenuToggled)
    const editTask = (newTask, goals) => {
        newTask.id = task.id
        api.editTask(token, newTask, goals).then(loadUserData(token))
    }

    const animateRiver = (duration, timeElapsed) => { // these values are in seconds 
        let percent = (100 * timeElapsed) / duration
        let offset = 360 - ((360 * percent) / 100)
        
        if (!!river) river.style.strokeDashoffset = `${offset}px`
    }

    return (
        <Container>
            <Banner>
                <svg viewBox="0 0 376 406" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinecap="square" strokeLinejoin="round" strokeMiterlimit="1.5">
                <path d="M375.5 0H.5v358.839c62.789-11.476 125.19 7.561 187.5 22.828 62.517-15.582 125.022-42.175 187.5-32.334V0z"
                    fill="url(#_Linear1)" />
                <path d="M.5 345.788v-60.241l18.295-18.294 21.628 21.628 35.294-35.295 35.295 35.295v56.907H.5z" fill="#852e41" />
                <path d="M201.84 275.483l-39.054-41.109-62.794 66.098-46.945-49.416L.5 306.368v46.965l207 18.334-5.66-96.184z"
                    fill="#a73a52" />
                <path d="M279.5 273.932l44.245-44.245 22.495 22.495v27.303l-66.74-5.553z" fill="#852e41" />
                <path
                    d="M.5 336.113l44.868-44.869 18.715 18.715 56.382-56.382 40 40 102.744-102.744 72.411 72.411 39.88-39.88v132.213c-72.948 3.569-145.892 14.402-218.833 32l-53.916-32H.5v-19.464z"
                    fill="#c24e68" />
                <path
                    d="M16.001 350.996s5.844.011 13.504-.717c20.861-2.476 65.163-7.287 79.662 3.786 28.342 21.644 25.806 22.304 69.5 22.812 88.014 1.022 57.437-31.825 111.833-20.359 39.338 8.292 41.271-15.702 69.324-15.741"
                    fill="none" stroke="#fffde3" strokeWidth="32" />
                <path id="river-front" css={riverStroke}
                    d="M16.001 350.996s5.844.011 13.504-.717c20.861-2.476 65.163-7.287 79.662 3.786 28.342 21.644 25.806 22.304 69.5 22.812 88.014 1.022 57.437-31.825 111.833-20.359 39.338 8.292 41.271-15.702 69.324-15.741"
                    fill="none" stroke="#a6c6ff" strokeWidth="32" />
                <g opacity=".42" fill="none" stroke="#000" strokeWidth=".65">
                    <path d="M11 348s3.767-.436 5.001 0c1.234.436 2.985.875 4.999 0s3.52-1.36 5-1M20 357s1.673-2.249 9-1 7.303-.712 10-1M104.129 341.074c.954 0 1.965-.132 2.861.223.276.109.196.408.337.478.423.212.908.514 1.22.846.642.684 2.431.949 3.315.949M108.173 345.584c1.553 0 3.707-.272 4.915.936.561.561.347 1.826 1.165 2.235 1.175.588 2.742.176 3.895 1.023.875.643 1.221 1.663 2.33 1.94M98.642 348.473c.364 0 .78-.063 1.098.096.397.199.45.797.91.885.624.12 1.313-.121 1.929-.005.316.06.42.807.633 1.02.246.246 1.114.073 1.415.073M163.211 372.623c0-1.063 1.366-.872 2.102-.872 2.364 0 4.325 1.019 6.692 1.019 1.299 0 2.454-1.142 3.728-1.41 1.72-.361 3.572.703 5.372.494 1.94-.224 3.725-1.183 5.748-1.183M155.242 383.898c0-.045 1.575-.26 1.733-.32 2.394-.902 4.093 1.596 6.537 1.081 2.322-.49 4.154-1.183 6.676-.914 1.777.189 3.417 1.415 5.243 1.626 2.174.251 3.895-.726 5.965-.985 2.315-.29 4.562.329 6.815-.517M203.052 374.52c.654 0 1.474-1.028 2.24-1.157 1.12-.189 2.478.162 3.587-.119 1.087-.275 1.819-1.26 2.969-1.452 1.226-.205 2.563-.069 3.814-.069M234.811 377.326c.937-.952 2.06-.108 3.078-.366 1.044-.265 1.729-.835 2.919-.835M262.036 345.607c0-.952 2.08-1.482 2.856-1.287 1.194.301 1.48.941 2.924.664.952-.182 1.652-1.134 2.729-.761 2.017.697 3.335.639 5.641.639M272.423 365.154c-.022-.208 1.689-.284 1.766-.283 1.275.026 3.083 1.616 4.383.782 1.151-.738 2.504-.984 3.88-.383.567.247 1.208 1.038 1.78 1.153 1.323.265 2.607-.697 3.801-.99 1.769-.434 4.827.587 6.228 1.723M287.389 361.301c1.502 0 2.456.824 3.796.824.378 0 2.837-.111 2.837.217M330.129 362.134c.533-.543 1.445-.728 2.117-.963.21-.073.972.158 1.127 0 .819-.831 1.514-1.069 2.913-1.069M352.54 334.998c2.161-2.197 4.628-.162 7.141-.644 1.411-.27 2.316-2.07 3.851-2.329 1.711-.289 4.42 1.691 5.846.867 1.1-.635 2.012-1.701 3.044-2.439M352.21 341.771c.811 0 1.668-.538 2.531-.538.453 0 2.035.264 2.286 0 .576-.604 1.311-2.031 2.165-2.247 1.141-.289 3.07.311 4.018-.643" />
                </g>
                <circle cx="64.083" cy="91.161" r="31.917" fill="#f5ee09" /><text x="225.998" y="86.577"
                    fontFamily="'Hind-Regular','Hind'" fontSize="34.542" className="time-display">{ `${formatTime(time.hour)}:${formatTime(time.minutes)}:${formatTime(time.seconds)}` }</text>
                <defs>
                    <linearGradient id="_Linear1" x2="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(0 -307.868 307.868 0 188 336.113)">
                        <stop offset="0" stopColor="#fff872" />
                        <stop offset="1" stopColor="#fff3a7" />
                    </linearGradient>
                </defs>
            </svg>
            </Banner>
            <ButtonContainer>
                <MenuButton showMenu={ showMenu } menuToggled={ menuToggled } />
            </ButtonContainer>
            <Menu menuToggled={ menuToggled } showTaskMenu={ showTaskMenu } editMenu={ true } />
            <TaskMenu menuToggled={ taskMenuToggled } submitTask={ editTask } currentTask={ task } currentGoals={ allGoals } />
            <Grid>
                { allGoals ? allGoals.map((goal, i) => <Goal key={i} goal={goal} time={ time } animateRiver={ animateRiver } />) : '' }
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    const { goals, tasks } = state.userData
    return {
        goals,
        tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUserData: token => dispatch(userData(token))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GoalPage)