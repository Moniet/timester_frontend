import React from 'react'
import styled from '@emotion/styled'
import { Router, Link, Route } from 'react-router-dom'
import { colors, mq } from '../styles/theme'

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: calc(50px + 1vw);
    background: ${colors.bgDark};

    a {
        color: ${colors.primary}
        font-weight: bold;
        font-size: 1.25rem;
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