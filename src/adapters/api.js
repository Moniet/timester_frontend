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

const registerUser = (user) => {
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

const getTasks = (token) => {
    return fetch(`http://localhost:3000/tasks`, {
     method: 'GET',
     headers: {
       Authorization: `Bearer ${token}`
     }
   }).then(res => res.json())
 }

 const createTasks = (token, task, goals) => {
  return fetch(`http://localhost:3000/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      user: {
        task: task,
        goals: goals
      }
    })
 })
}

export default {
    login,
    registerUser,
    getTasks,
    createTasks
}