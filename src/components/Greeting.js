/** @jsx jsx */
import  { jsx, css, keyframes } from '@emotion/core'
import React from 'react'
import styled from '@emotion/styled'


const Banner = styled.div`
    position: absolute;
    background: rgba(0,0,0,0.3);
    color: white;
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: 5px;
    top: 0; 
    width: 100vw;
    height: 20vw;
    display: grid;
    justify-content: center;
    align-items: center;
`

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`


const Greeting = () => {
    return (
        <Banner css={css`
            animation: ${fadeInOut} 20s ease-in-out; 
            animation-fill-mode: forwards;
        `}
        >
            TIMESTER
        </Banner>
    )  
}

export default Greeting