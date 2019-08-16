import React from 'react'
import styled from '@emotion/styled'
import { colors, mq } from '../styles/theme'

const Message = styled.h1`
    position: relative;
    font-weight: 900;
    color: white;
    margin-top: 75%;
`

const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom left, ${colors.primary}, ${colors.secondary});
`

const DashboardMessage = ({ message }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" height="0">
                <defs>
                <filter>
                    <linearGradient id="message-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#5cf6fc"/>
                        <stop offset="1" stopColor="#6a82fb"/>
                    </linearGradient>
                </filter>
                </defs>
            </svg>
            <Container>
                <Message>
                { message }
                </Message>
            </Container>
        </>
    )
}

export default DashboardMessage 