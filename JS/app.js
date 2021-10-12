// Time class

class Time {

    constructor(liveTime) {
        this.liveTime = liveTime;
    }
}

// UI class

class UI {

    static displayTime () {

        let liveSeconds = [secCount];
        let liveMinutes = [minCount];
        let liveHours = [hourCount];

        liveSeconds.forEach((second) => UI.addliveTimeToSecondsSpan(second));
        liveMinutes.forEach((minute) => UI.addliveTimeToMinutesSpan(minute));
        liveHours.forEach((hour) => UI.addliveTimeToHoursSpan(hour));
    }

    static addliveTimeToSecondsSpan (seconds) {

        const frontSpan = document.getElementById('front-seconds-span');
        let time = new Time(seconds);
        frontSpan.textContent = time.liveTime;
    }
    static addliveTimeToMinutesSpan (minutes) {

        const frontSpan = document.getElementById('front-minutes-span');
        let time = new Time(minutes);
        frontSpan.textContent = time.liveTime;
        
    }
    static addliveTimeToHoursSpan (hours) {

        const frontSpan = document.getElementById('front-hours-span');
        let time = new Time(hours);
        frontSpan.textContent = time.liveTime;
        
    }
}


// Event: Display Times

document.addEventListener('DOMContentLoaded', UI.displayTime);

let secCount = 1;
setInterval(() => {
    console.log('working');
    UI.addliveTimeToSecondsSpan(secCount);
    secCount ++;
}, 1000);

let minCount = 1;
setInterval(() => {
    secCount = 1;
    UI.addliveTimeToMinutesSpan(minCount);
    minCount ++;
}, 10000);

let hourCount = 1;
setInterval(() => {
    minCount = 1;
    UI.addliveTimeToHoursSpan(hourCount);
    hourCount ++;
}, 3600000);


// let liveMinutes = 1;
// setInterval(() => {
//     liveSeconds = 1;
//     console.log('work');
//     UI.addliveTimeToMinutesSpan(liveMinutes);
//     liveMinutes ++;
// }, ((10000-1000*liveSeconds)+1000));