const baseUrl = 'https://timester.herokuapp.com';

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
    return fetch(`${baseUrl}/tasks`, {
     method: 'GET',
     headers: {
       Authorization: `Bearer ${token}`
     }
   }).then(res => res.json())
 }

 const createTasks = (token, task, goals) => {
  return fetch(`${baseUrl}/tasks`, {
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
 }).then(res => res.json())
}

const editTask = (token, task, goals, id) => {
  return fetch(`${baseUrl}/tasks/${id}`, {
    method: 'PATCH',
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
 }).then(res => res.json())
}

export default {
    login,
    registerUser,
    getTasks,
    createTasks,
    editTask
}