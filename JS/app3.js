// Time class

class Time {

    constructor(liveTime) {
        this.liveTime = liveTime;
    }
}


// UI class

class UI {

    // static displayTime () {

    //     let liveSeconds = [secCount];
    //     let liveMinutes = [minCount];
    //     let liveHours = [hourCount];

        
    //     liveSeconds.forEach((second) => UI.addliveTimeToSecondsSpan(second));
    //     liveMinutes.forEach((minute) => UI.addliveTimeToMinutesSpan(minute));
    //     liveHours.forEach((hour) => UI.addliveTimeToHoursSpan(hour));
        
    // }

    static addliveTimeToSecondsSpan (seconds) {

        const frontSpan = document.getElementById('front-seconds-span');
        frontSpan.textContent = seconds.liveTime;
    }
    static addliveTimeToMinutesSpan (minutes) {

        const frontSpan = document.getElementById('front-minutes-span');
        frontSpan.textContent = minutes.liveTime;
    }
    static addliveTimeToHoursSpan (hours) {

        const frontSpan = document.getElementById('front-hours-span');
        frontSpan.textContent = hours.liveTime;
    }
}


class Store {

    static addTimeToStore (time)
}


// Event: Display Times

document.addEventListener('DOMContentLoaded', UI.displayTime);


let secCount = 1;
setInterval(() => {
    console.log('working');
    let second = new Time(secCount);
    UI.addliveTimeToSecondsSpan(second);
    Store.addTimeToStore(second);
    secCount ++;
}, 1000);

let minCount = 2;
setInterval(() => {
    secCount = 1;
    let minute = new Time(minCount)
    UI.addliveTimeToMinutesSpan(minute);
    Store.addTimeToStore(minute);
    minCount ++;
    //console.log('ok');
}, 10000);

let hourCount = 4;
setInterval(() => {
    minCount = 1;
    let hour = new Time(hourCount);
    UI.addliveTimeToHoursSpan(hour);
    Store.addTimeToStore(hour);
    hourCount ++;
}, 100000);