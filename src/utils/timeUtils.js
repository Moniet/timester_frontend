export const getCurrentTime = () => {
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    return {
        hour,
        minutes,
        seconds
    }
}

const formatTime = (time) => {
    if (time < 10) return `0${time}`;
    if (time >= 10) return `${time}`;
}

export const getFormattedDate = (date) => {
    let year = date.getFullYear()
    let day = date.getDay()
    let month = date.getMonth()

    return `${year}-${formatTime(day)}-${month === 0 ? (formatTime(month+1)) : formatTime(month)}`
}

export const getMinutes = (date) => {
    let newDate = new Date(date)
    return newDate.getMinutes()
}

// export const limitGoalRange = (startTime, endTime) => { // limits the current 

// }