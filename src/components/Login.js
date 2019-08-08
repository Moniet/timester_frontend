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
    background: linear-gradient(to top, 
        ${colors.primary}, 
        ${colors.secondary}, 
        ${colors.tertiary}
    );
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
        font-size: 1em;
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
        font-size: 1em;
    }

    a {
        color: white;
        align-self: flex-end;
        font-size: 0.75rem;
        margin-top: -1rem;
    }
`

const Button = styled('div')`
    padding: 1em;
    font-weight: bold;
    border: none;
    background: ${colors.button};
    border-radius: 10px;
    margin-top: 2em;
    ${mq[0]} { 
        width: 50%; 
    }
    ${mq[1]} { 
        width: 50%; 
    }
`

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = e => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <Container>
            <img src={require('../assets/img/form-memphis-design-top.svg')} />
            <Form role="form">
                <label>Username</label>
                <input 
                    type='text' 
                    data-type='username'
                    onChange={(e) => handleUsernameChange(e)}
                />
                <label>Password</label>
                <input 
                    type='password' 
                    date-type='password'
                    onChange={(e) => handlePasswordChange(e)}
                />
                <Link to="/register">Register</Link>
                <Button>Login</Button>
            </Form>
            <img src={require('../assets/img/form-memphis-design-bottom.svg')} />
        </Container>
    )
}

export default Login