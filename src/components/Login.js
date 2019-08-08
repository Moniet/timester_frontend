import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from './Layout'
import { colors, mq, styles } from '../styles/theme'
import { Link } from 'react-router-dom'

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, ${colors.primary}, ${colors.secondary}, ${colors.tertiary});
`

const Form = styled('form')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    ${mq[0]} {
        width: 75%;
        height: 300px;
    }

    ${mq[1]} {
        width: 100%;
        height: 300px;
    }

    label {
        font-weight: 500;
        color: white;
        margin-bottom: 1em;
        font-size: 1rem;
    }

    input {
        border: solid 2px white;
        border-radius: 10px;
        background: rgba(255,255,255,0.25);
        width: 100%;
        padding: 0.75rem;
        margin-bottom: 2rem;
        box-shadow: ${styles.shadow};
        letter-spacing: 2px;
        font-size: 0.75em;
    }

    span {
        color: white;
        align-self: flex-end;
        font-size: 0.75rem;
        margin-top: -1rem;
        cursor: pointer;
    }
`

const Button = styled('button')`
    padding: 0.9rem;
    font-weight: bold;
    font-size: 0.75rem;
    border: none;
    background: ${colors.button};
    border-radius: 10px;
    margin-top: 2rem;
    color: white;
    cursor: pointer;
    ${mq[0]} {  width: 50%; }
    ${mq[1]} { width: 50%; }
`

const Login = () => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [registerPage, setRegisterPage] = useState(false)

    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleClick = () => {
        setRegisterPage(true)
    }

    const nameInput = () => {
        if (registerPage) { 
           return ( 
                <>
                    <label>name</label> 
                    <input type='text' data-type='name' onChange={(e) => handleUsernameChange(e)} /> 
                </>
            )
        }
    }

    return (
        <Container>
            <img src={require('../assets/img/form-memphis-design-top.svg')} />
            <Form role="form">
                { nameInput() }
                <label>Password</label>
                <input type='text' data-type='username' onChange={(e) => handleUsernameChange(e)} />

                <label>Password</label>
                <input type='password' date-type='password' onChange={(e) => handlePasswordChange(e)} />

                <span onClick={() => handleClick()}>Register</span>
                <Button>Login</Button>
            </Form>
            <img src={require('../assets/img/form-memphis-design-bottom.svg')} />
        </Container>
    )
}

export default Login