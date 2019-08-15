/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors } from '../styles/theme'

const container = css`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${ colors.bg };
    margin-bottom: calc(50px + 1vw);
`

const Container = ({ children }) => {
    return (
        <div css={ container }>
            { children }
        </div>
    )
} 

export default Container