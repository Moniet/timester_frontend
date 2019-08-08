import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`
const Layout = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    )
}

export default Layout;