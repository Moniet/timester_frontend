import React, {useEffect } from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { TweenLite } from "gsap/TweenMax"
import logoutUser from '../actions/userActions'
import { connect } from 'react-redux'

const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: white;
    overflow-y: scroll;
    z-index: 500;
    top: 0;
    display: flex;
    justify-content: center;
    opacity: 0;
    transform: translateY(-100%);
`

const ItemsContainer = styled.div`
    position: absolute;
    top: 50%;
    width: 90%;
    margin: 22vw auto;
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    li, a {
        font-size: 1.5rem;
        font-weight: bold;
        color: black;
        line-height: 4rem;
    }
`

const Menu = ({ menuToggled, showTaskMenu, showEditMenu, editMenu, logout }) => {

    useEffect(() => {
        const el = document.querySelector('.menu-container');
        if (menuToggled) TweenLite.to(el, 1, {y: 0, opacity: 1});
        if (!menuToggled) TweenLite.to(el, 1, {y: -1000, opacity: 0});
    }, [menuToggled])

    return (
        <Container className="menu-container">
            <ItemsContainer>
                <List>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/calendar">Calendar</Link></li>
                    <li onClick={ () => showTaskMenu() }>New Task</li>
                    { editMenu ? <li onClick={ () => showEditMenu() }>Edit</li> : '' }
                    <li onClick={ () => logout() }><Link to="/">Logout</Link></li>
                </List>
            </ItemsContainer>
        </Container>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logoutUser())
    }
}

export default connect(null, mapDispatchToProps)(Menu)