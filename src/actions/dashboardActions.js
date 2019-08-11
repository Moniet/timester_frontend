import api from '../adapters/api'
import moment from 'moment'

const loadDashboard= (tasks, goals) => {
    return { 
        type: 'LOAD_DASHBOARD',
        goals,
        tasks
    }
}

export const dashboardAction = token => {
    return function (dispatch) {
        api.getTasks(token)
            .then(data => {
                const { tasks, goals  } = data
                dispatch(loadDashboard(tasks.data, goals.data))
                // let date = data.tasks.data[0].attributes.start_time
                // // let d = moment(date)
                // let d = new Date(date)
            })
            
    }
}