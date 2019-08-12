import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { userData } from '../actions/userDataActions'
import { colors, mq } from '../styles/theme'
import TaskGrid from '../components/TaskGrid'
import Container from '../components/Container'
import MenuButton from './MenuButton'
import TaskMenu from './TaskMenu'

const Banner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(30deg, ${colors.primary}, ${colors.secondary}, ${colors.tertiary});

    ${mq[0]} {
        clip-path: polygon(0 0, 100% 0, 100% 60%, 0% 100%);
    }
`

const BannerContainer = styled.div`
    width: 100%;
    height: 45%;
`

const BannerHeader = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Dashboard = ({ loadUserData, token, tasks, goals }) => {
    const menu = React.createRef()

    useEffect(() => {
        if (token && tasks.length === 0) {
            loadUserData(token)
        }
        menu.current.style.opacity = 0
    })

    const showMenu = () => {
        let op = menu.current.style.opacity
        if (op === 0) {
            op = 1
        } else {
            op = 0
        }
    }
    

    return (
        <Container>
            <BannerContainer>
                <Banner>
                    <BannerHeader className="banner-header">Home</BannerHeader>
                </Banner>
                <MenuButton showMenu={ showMenu }/>
            </BannerContainer>
            <TaskMenu ref={ menu } />
            <TaskGrid tasks={ tasks } />
        </Container>
    )
}

const mapStateToProps = (state, ownProps) => {
    let { tasks, goals} = state.userData;
    console.log(state)
    return {
        tasks,
        goals
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUserData: token => dispatch(userData(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)