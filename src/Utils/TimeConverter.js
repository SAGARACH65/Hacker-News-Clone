
export const timeConverter = UNIX_timestamp => {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    return ({
        date: year + '-' + month + '-' + date,
        time: hour + ':' + min + ':' + sec
    });
}

export const calculateTimeDifference = UNIX_timestamp => {
    // console.log(UNIX_timestamp);
    let currentDate = new Date();
    let secondDiff = Math.floor((currentDate.getTime() / 1000 - UNIX_timestamp));

    if (secondDiff < 60) return (secondDiff + 'seconds');
    if ((secondDiff / 60) < 60) return (Math.floor(secondDiff / 60) + ' minutes')
    if ((secondDiff / 3600) < 24) return (Math.floor(secondDiff / 3600) + ' hours')
    if ((secondDiff / 86400) < 365) return (Math.floor(secondDiff / 86400) + ' days')

    return (Math.floor(secondDiff / 31536000) + ' years')
}

