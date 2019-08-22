import React from 'react'
import styled from '@emotion/styled'
import { colors, mq } from '../styles/theme'
import { gridSize } from '../utils/gridUtils'

const GridContainer = styled.div`
    display: grid;
    justify-content: center;
    margin: 0 auto;
    padding: 1rem;
    background: ${ colors.bg };

    ${mq[0]} {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: ${ gridSize.sm }px;
        width: 100%;
        grid-gap: 1rem;
    }

    ${mq[1]} {
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: ${ gridSize.sm }px;
        width: 100%;
        padding: 0 2rem;
    }

    ${mq[2]} {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: ${ gridSize.lg }px;
        width: 100%;
        padding: 0 2rem;
    }
`

const Grid = ({ children }) => {
    return (
        <GridContainer className='grid'>
            { children }
        </GridContainer>
    )
}

export default Grid