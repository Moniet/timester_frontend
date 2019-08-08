const baseUrl = 'http://localhost:3000/';

const login = (user) => {
    return fetch(`${baseUrl}/login`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            user: {
                username: user.username,
                password: user.password
            }
        })
    }).then(res => res.json())
}

export const createUser = (user) => {
    return fetch(`${baseUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: user.name,
          username: user.username,
          password: user.password
        }
      })
    }).then(res => res.json())
}

export default {
    login
}