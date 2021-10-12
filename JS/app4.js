
//HOURS, MINUTES & SECONDS
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// Hour Faces
const hoursFrontFace = document.getElementById('hours-front-face');
const hoursBackFace = document.getElementById('hours-back-face');

// Minute Faces
const minutesFrontFace = document.getElementById('minutes-front-face');
const minutesBackFace = document.getElementById('minutes-back-face');

// Seconds Faces
const secondsFrontFace = document.getElementById('seconds-front-face');
const secondsBackFace = document.getElementById('seconds-back-face');


// SPANS
// Hours Spans
const hoursFrontSpan = document.getElementById('front-hours-span');
const hoursBackSpan = document.getElementById('back-hours-span');
// Minutes Spans
const minutesFrontSpan = document.getElementById('front-minutes-span');
const minutesBackSpan = document.getElementById('back-minutes-span');
// Seconds Spans
const secondsFrontSpan = document.getElementById('front-seconds-span');
const secondsBackSpan = document.getElementById('back-seconds-span');

// COMMON SPANS
// Text spans
const textSpans = document.querySelectorAll('.text-spans');

// setInterval(() => {
//     const presentDate = new Date();
//     console.log(presentDate.getSeconds());
// }, 1000);


setInterval(() => {
    const presentDate = new Date();
    secondsFrontSpan.textContent = `${presentDate.getSeconds()}`;

    // Minutes
    minutesFrontSpan.textContent = `${presentDate.getMinutes()}`;
    minutesBackSpan.textContent = `${presentDate.getMinutes()}`;

    if ( secondsFrontSpan.textContent === `0`) {

        minutesFrontFace.style.transition = '1s';
        minutesBackFace.style.transition = '1s';
        minutesFrontFace.classList.add('main-changer-minutes');
        minutesBackFace.classList.add('main-changer-minutes');

        setTimeout(() => {
            minutesBackFace.style.transition = 'none';
            minutesFrontFace.style.transition = 'none';
            minutesFrontFace.classList.remove('main-changer-minutes');
            minutesBackFace.classList.remove('main-changer-minutes');
        }, 1000);
    }

    // Hours
    hoursFrontSpan.textContent = `${presentDate.getHours()}`;
    hoursBackSpan.textContent = `${presentDate.getHours()}`;


    if ( minutesFrontSpan.textContent === `0`) {

        hoursFrontFace.style.transition = '1s';
        hoursBackFace.style.transition = '1s';
        hoursFrontFace.classList.add('main-changer-hours');
        hoursBackFace.classList.add('main-changer-hours');

        setTimeout(() => {
            hoursFrontFace.style.transition = 'none';
            hoursBackFace.style.transition = 'none';
            hoursFrontFace.classList.remove('main-changer-hours');
            hoursBackFace.classList.remove('main-changer-hours');   
        }, 1000);

    }
}, 1000);