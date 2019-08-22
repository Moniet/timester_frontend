const logoutUser = () => {
    localStorage.setItem('token', 'false')
    console.log('loggin out');
    
    return {
        type: 'LOGOUT_USER'
    }
}

export default logoutUser