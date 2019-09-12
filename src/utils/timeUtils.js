import { isFor } from "@babel/types"

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
    let year = date.getUTCFullYear()
    let day = date.getUTCDate()
    let month = date.getUTCMonth()

    return `${year}-${formatTime(month+1)}-${formatTime(day)}`
}

export const getMinutes = (date) => {
    let newDate = new Date(date)
    return newDate.getUTCMinutes()
}

export const formatToUTC = (str) => {
    const d = new Date(str)

    if (str) {
        if (str.includes('000Z')) return `${formatTime(d.getUTCHours())}:${formatTime(d.getUTCMinutes())}`;
        return str;
    } else {
        return '00:00';
    }
}

// export const limitGoalRange = (startTime, endTime) => { // limits the current 

// }