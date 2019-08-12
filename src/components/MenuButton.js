import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import  { colors, styles } from '../styles/theme'

const Button = styled.button`
    width: 2em;
    height: 2em;
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background: ${colors.tertiary};
    border: none;
    border-radius: 50%;
    position: absolute;
    top: 30%;
    left: 80%;
    transform: translate(-1em, -1em);
    outline: none;
    box-shadow: ${styles.shadow}
    z-index: 2000;
`

const MenuButton = ({ showMenu }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = () => {
        // showMenu();
        setMenuOpen(!menuOpen)
    }

    return (
        <Button onClick={() => handleClick() }>+</Button>
    )
}

export default MenuButton