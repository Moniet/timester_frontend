/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'

const input = css`
    border: none;
    border-bottom: solid 2px black;
    letter-spacing: 2px;
    font-weight: 300;
    padding: 1rem 0.5rem 0.5rem 0;
    margin: 0.25rem 0 2rem 0;
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
`

const MenuInput = ({ setValue, value }) => {
    return (
        <input type="text" css={input} onChange={e => setValue(e.target.value)} value={ value }/>
    )
}

export default MenuInput