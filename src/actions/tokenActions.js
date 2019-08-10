export const setToken = token => {
    return {
        type: 'SET_TOKEN',
        token
    }
}

export const deleteToken = () => {
    return {
        type: 'DELETE_TOKEN'
    }
}