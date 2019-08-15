import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import  { colors, styles } from '../styles/theme'

const Button = styled.button`
    width: 2em;
    height: 2em;
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background: transparent;
    padding: 0;
    border: none;
    border-radius: 50%;
    position: absolute;
    top: 30%;
    left: 80%;
    transform: translate(-1em, -1em);
    outline: none;
    z-index: 2000;
`

const Image = styled.img`
    width: 100%;
`

const MenuButton = ({ showMenu }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = () => {
        showMenu();
        setMenuOpen(!menuOpen)
    }

    return (
        <Button onClick={() => handleClick() }>
            <Image src={require('../assets/img/menu-btn.svg')} />
        </Button>
    )
}

export default MenuButton