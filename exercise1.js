// bai 1
// ------------------------------------
var today = new Date();
var day = ("0" + (today.getDay())).slice(-2);
var month = ("0" + (today.getMonth())).slice(-2);
var year = today.getUTCFullYear().toString().substr(-2);

var getweekdays = (date) => {
    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekday[date.getDay()];
}
var timeformat = (time) => {
    var hours = time.getHours();
    var minute = ("0" + (time.getMinutes())).slice(-2);
    var ampm;
    if (hours < 12) {
        ampm = "AM";
    }
    if (hours > 12 && hours == 24) {
        hours = 0;
        ampm = "AM"
    }
    if (hours > 12 && hours != 24) {
        hours = hours % 12;
        ampm = "PM"
    } else {
        ampm = "AM"
    }
    if (hours == 12) {
        hours = 12;
        ampm = "PM"
    }
    return hours + ':' + minute + ampm;

}
var timeformatCET = (time) => {
    var hours = time.getUTCHours() + 1;
    var minute = ("0" + (time.getUTCMinutes())).slice(-2);
    var second = ("0" + (time.getUTCSeconds())).slice(-2);

    var ampm;
    if (hours < 12) {
        ampm = "AM";
    }
    if (hours > 12 && hours == 24) {
        hours = 0;
        ampm = "AM"
    }
    if (hours > 12 && hours != 24) {
        hours = hours % 12;
        ampm = "PM"
    } else {
        ampm = "AM"
    }
    if (hours == 12) {
        hours = 12;
        ampm = "PM"
    }
    return hours + ':' + minute + ':' + second + ampm;

}
var getdate = (date) => {
    var day = ("0" + (date.getDay())).slice(-2);
    var month = ("0" + (date.getMonth())).slice(-2);
    var year = date.getFullYear().toString().substr(-2);
    return day + '/' + month + '/' + year
}

var get_date = (date) => {
    var day = ("0" + (date.getDay())).slice(-2);
    var month = ("0" + (date.getMonth())).slice(-2);
    var year = date.getUTCFullYear().toString().substr(-2);
    return day + '-' + month + '-' + year;

}

var getFulldate = (date) => {
    var day = ("0" + (date.getDay())).slice(-2);
    var month = ("0" + (date.getMonth())).slice(-2);
    var year = date.getUTCFullYear();
    return day + '-' + month + '-' + year;

}

var getHoursMinute = (date) => {
    var hour = date.getHours();
    var minute = ("0" + (date.getMinutes())).slice(-2);
    var second = ("0" + (date.getSeconds())).slice(-2);
    return ' ' + hour + ':' + minute;
}

var getHoursMinuteSecond = (date) => {
    var hour = date.getHours();
    var minute = ("0" + (date.getMinutes())).slice(-2);
    var second = ("0" + (date.getSeconds())).slice(-2);
    return ' ' + hour + ':' + minute + ':' + second;
}

var getNameofMonth = (date) => {
    var months = ['January', ' February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()].substring(0, 3);

}

var getfullNameofMonth = (date) => {
    var months = ['January', ' February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()];

}

var getfullDateTime = (datetime) => {
    var months = ['January', ' February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = months[datetime.getMonth()].substring(0, 3);
    var year = datetime.getFullYear();
    var day = ("0" + (datetime.getDay())).slice(-2);
    return day + '-' + month + '-' + year;
}

var gettimezone = (date) => {
    var offset = date.getTimezoneOffset();
    var timezone = Math.abs(offset);

    if (offset < 0) {
        return '+' + ("00" + Math.floor(timezone / 60)).slice(-2) + ":" + ("00" + (timezone % 60)).slice(-2);

    } else {
        return '-' + ("00" + Math.floor(timezone / 60)).slice(-2) + ":" + ("00" + (timezone % 60)).slice(-2);

    }
}
var getdatetimeutc = (date) => {
    var day = ("0" + (date.getUTCDay())).slice(-2);
    var month = ("0" + (date.getUTCMonth())).slice(-2);
    var year = date.getUTCFullYear();

    return getweekdays(date) + ', ' + day + ' ' + month + ', ' + year + ' ' + timeformatCET(date) + ' CET';
}

// ---------------------------------------
console.log(get_date(today));
// ------------------------------------
console.log(get_date(today) + getHoursMinute(today));
// ------------------------------------
var datetime = getFulldate(today) + getHoursMinuteSecond(today);
console.log(datetime);
// -----------------------------------
var datetime = today.getDay() + '/' + today.getMonth() + '/' + year;
console.log(datetime);
// -----------------------------------
console.log(getdate(today));
// -----------------------------------
console.log(getNameofMonth(today) + ' ' + day + ', ' + today.getFullYear());
// -----------------------------------
console.log(getfullNameofMonth(today) + ' ' + day + ' ' + today.getFullYear());
// -----------------------------------
console.log(getdate(today) + ' ' + timeformat(today));
// -----------------------------------
console.log(getfullDateTime(today) + getHoursMinuteSecond(today));
// -----------------------------------
console.log(getweekdays(today) + ', ' + getfullNameofMonth(today) + ' ' + day + ',' + today.getFullYear());
// -----------------------------------
console.log(today.getFullYear() + '-' + today.getMonth() + '-' + today.getDay() + gettimezone(today));
// ----------------------------------
console.log(getweekdays(today) + ', ' + getfullNameofMonth(today) + ' ' + day + ',' + today.getFullYear() + ' ' + timeformat(today));
console.log(getdatetimeutc(today));