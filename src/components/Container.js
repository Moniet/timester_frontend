/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors } from '../styles/theme'
import React from 'react'

const container = css`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${ colors.bg };
`

const Container = ({ children }) => {
    return (
        <div css={ container } className="container">
            { children }
        </div>
    )
} 

export default Container