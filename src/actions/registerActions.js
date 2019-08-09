const register = user => {
    return {
        type: 'REGISTER_USER',
        user: { username: user.username }
    }
}

export default register