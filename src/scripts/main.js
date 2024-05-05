AOS.init();

const eventDate = new Date("Nov 25, 2024 19:00:00");
const eventTimeStamp = eventDate.getTime();

const timer = setInterval( function() {
    const currentDate = new Date();
    const currentTimeStamp = currentDate.getTime();

    const timeUntilEvent = eventTimeStamp - currentTimeStamp;

    const dayMS = 1000 * 60 * 60 * 24;
    const hourMS = 1000 * 60 * 60;
    const minuteMS = 1000 * 60;

    const daysUntilEvent = Math.floor(timeUntilEvent / dayMS);
    const hoursUntilEvent = Math.floor((timeUntilEvent % dayMS) / hourMS);
    const minutesUntilEvent = Math.floor((timeUntilEvent % hourMS) / minuteMS);
    const secondsUntilEvent = Math.floor((timeUntilEvent % minuteMS) / 1000);

    document.getElementById('counter').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if (timeUntilEvent < 0) {
        clearInterval(timer);
        document.querySelector('.hero__text').innerHTML = `O maior evento de tecnologia do Brasil expirou.`;
        document.getElementById('counter').innerHTML = '';
    }
}, 1000);
