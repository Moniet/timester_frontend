import React from 'react'
import styled from '@emotion/styled'
import { colors, mq } from '../styles/theme'

const gridSize = 25;

const GridContainer = styled.div`
    display: grid;
    justify-content: center;
    margin: 0 auto;
    padding: 1rem;
    background: ${colors.bg};

    ${mq[0]} {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: ${gridSize}px;
        width: 100%;
        grid-gap: 1rem;
    }

    ${mq[1]} {
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: ${gridSize}px;
        width: 90%;
    }
`

const Grid = ({ children }) => {
    return (
        <GridContainer>
            { children }
        </GridContainer>
    )
}

export default Grid