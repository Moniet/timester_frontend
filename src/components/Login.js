/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import { colors, mq, styles } from '../styles/theme'
import { connect } from 'react-redux';
import login from '../actions/loginActions';
import register from '../actions/registerActions';
import Greeting from './Greeting'

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, ${colors.primary}, ${colors.secondary}, ${colors.tertiary});

    ${mq[3]} {
        background: linear-gradient(to top right, ${colors.primary}, ${colors.secondary}, ${colors.tertiary});
    }
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

    ${mq[3]} {
        width: 40%;
        height: 400px;
        
        input {
            margin-bottom: 4rem;
        }
    }

    ${mq[4]} {
        width: 30%;
        height: 400px;
    }

    label {
        font-weight: 500;
        color: white;
        margin-bottom: 1em;
        font-size: 1rem;
    }

    input {
        font-size: 0.75em;
        text-align: center;
        letter-spacing: 2px;
        width: 100%;
        padding: 0.75rem;
        margin-bottom: 2rem;
        border: solid 2px white;
        border-radius: 10px;
        outline: none;
        background: rgba(255,255,255,0.25);
        box-shadow: ${styles.shadow};

        ${mq[3]} {
            margin-bottom: 4rem;
        }
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

const image = css`
    ${mq[2]} {
        display: none;
    }
`

const Login = ({ login, register }) => {

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

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleClick = () => {
        setRegisterPage(!registerPage)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!registerPage) 
            login({ username: username, password: password })
        else 
            register({ name: name, username: username, password: password })
    }

    const nameInput = () => {
        if (!!registerPage) { 
           return ( 
                <>
                    <label>Name</label> 
                    <input type='text' data-type='name' onChange={(e) => handleNameChange(e)} /> 
                </>
            )
        }
    }

    return (
        <Container>
            <Greeting />
            <img src={require('../assets/img/form-memphis-design-top.svg')} css={image} alt=""/>
            <Form role="form" onSubmit={ handleSubmit }>
                { nameInput() }
                <label>Username</label>
                <input type='text' data-type='username' onChange={(e) => handleUsernameChange(e)} />

                <label>Password</label>
                <input type='password' date-type='password' onChange={(e) => handlePasswordChange(e)} />

                <span onClick={() => handleClick()}>Register</span>
                <Button>{registerPage ? 'Register' : 'Login'}</Button>
            </Form>
            <img src={require('../assets/img/form-memphis-design-bottom.svg')} css={image} alt="" />
        </Container>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(login(user)),
        register: user => dispatch(register(user))
    }
}

export default connect(null, mapDispatchToProps)(Login);