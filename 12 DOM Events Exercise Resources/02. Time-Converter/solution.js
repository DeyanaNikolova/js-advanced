function attachEventsListeners(){

    let daysBtn = document.getElementById('daysBtn')
    daysBtn.addEventListener('click', onConvert);

    let hoursBtn = document.getElementById('hoursBtn');
    hoursBtn.addEventListener('click', onConvert);

    let minutesBtn = document.getElementById('minutesBtn');
    minutesBtn.addEventListener('click', onConvert);

    let secondsBtn = document.getElementById('secondsBtn');
    secondsBtn.addEventListener('click', onConvert);

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }
    
    function convert(value, unit) {
        let days = value / rations[unit];
        return {
            days: days,
            hours: days * rations.hours,
            minutes: days * rations.minutes,
            seconds: days * rations.seconds
        }
    }

    function onConvert(ev) {
        let input = ev.target.parentElement.querySelector('input[type="text"]');
        let time = convert(Number(input.value), input.id);
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}