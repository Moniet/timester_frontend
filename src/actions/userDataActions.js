import api from '../adapters/api'
import moment from 'moment'

const loadUserData= (tasks, goals) => {
    return { 
        type: 'LOAD_USER_DATA',
        goals,
        tasks
    }
}

export const userData = token => {
    return function (dispatch) {
        api.getTasks(token)
            .then(data => {
                const { tasks, goals  } = data
                dispatch(loadUserData(tasks.data, goals.data))
                // let date = data.tasks.data[0].attributes.start_time
                // // let d = moment(date)
                // let d = new Date(date)
            })
    }
}