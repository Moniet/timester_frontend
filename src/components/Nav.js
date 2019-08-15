import React from 'react'
import styled from '@emotion/styled'
import { Router, Link, Route } from 'react-router-dom'
import { colors, mq } from '../styles/theme'

const Navigation = styled.nav`
    position: fixed;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: calc(50px + 1vw);
    background: ${colors.bg};
    background-image: ${colors.bg};
    border-top: solid 1px white;
    bottom: 0;

    a {
        color: white;
        font-weight: bold;
        font-size: 0.75rem;
        letter-spacing: 2px;
        &:hover {
            cursor: pointer;
        }
    }
`

const Nav = () => {

    return (
        <Navigation>
            <Link to='/'>Home</Link>
            <Link to='/calendar'>Calendar</Link>
        </Navigation>
    )

}

export default Nav