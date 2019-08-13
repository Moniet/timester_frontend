const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const formatTime = (time) => {
    if (time < 10) return `0${time}`;
    if (time >= 10) return `${time}`;
}

const formatToHours = date => {
    const newDate = new Date(date)
    const hours = newDate.getHours()
    const minutes = newDate.getMinutes()

    return `${formatTime(hours)}:${formatTime(minutes)}`
}

const readableDate = date => {
    let formattedDate = new Date(date)
    let dateArr = formattedDate.toString().split(" ")
    let day = formattedDate.getDay()
    return days[day] + ', ' + dateArr.slice(1, 4).join(" ");
}

const readableDay = date => {
    let formattedDate = new Date(date)
    let day = formattedDate.getDay()
    return days[day]
}

const readableMonth = date => {
    let formattedDate = new Date(date)
    let month = formattedDate.getMonth()
    return months[month]

}

const generateTimes = () => {
    const times = []
    const minutes = ['00', '15', '30', '45']

    let t = 0
    while (t < 24) {
        minutes.forEach(m => times.push(`${formatTime(t)}:${m}`))
        t += 1
    }

    return times
}

export {
    formatToHours,
    readableDate,
    readableDay,
    readableMonth,
    generateTimes
}