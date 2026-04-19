import {data} from "../assets/data/data.js";
import {monthNameToNumber} from "../utils/helper.js";

export const home = () => {
    const homeContainer = document.querySelector('.home');
    const [_, figureElement, timeElement, homeTime, calendarAnchor] = homeContainer.children;

    const generateFigureContent = ({bride}) => {
        const {L: {name: brideLName}, P: {name: bridePName}, couple: coupleImage} = bride;
        return `
            <img src="${coupleImage}" alt="couple animation">
            <figcaption>
                ${brideLName.split(' ')[0]} & ${bridePName.split(' ')[0]}
            </figcaption>`;
    };

    const generateTimeContent = ({event}) => {
        const {year, month, date, day} = event;
        return `
        <time datetime="${year}-${String(monthNameToNumber(month)).padStart(2, '0')}-${String(date).padStart(2, '0')}">
            ${day}, ${date} ${month} ${year}
        </time>`;
    };

    const generateCountdownMarkup = (days, hours, minutes, seconds) => {
        return `<div>
                    <p>${days}<br><span>Hari</span></p>
                </div>
                <div>
                    <p>${hours}<br><span>Jam</span></p>
                </div>
                <div>
                    <p>${minutes}<br><span>Menit</span></p>
                </div>
                <div>
                    <p>${seconds}<br><span>Detik</span></p>
                </div>`;
    };

    const getEventTimestamp = (event) => {
        const {year, month, date} = event;
        return new Date(`${year}-${String(monthNameToNumber(month)).padStart(2, '0')}-${String(date).padStart(2, '0')}T00:00:00`).getTime();
    };

    const findNextEvent = (events) => {
        const now = Date.now();
        return events.find(event => getEventTimestamp(event) > now) || events[events.length - 1];
    };

    const updateCountdown = (endTime, homeTime) => {
        const now = Date.now();
        const distance = endTime - now;

        const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
        const hours = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutes = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));

        homeTime.innerHTML = generateCountdownMarkup(days, hours, minutes, seconds);
    };

    let intervalId;

    const startCountdown = (homeTime, events) => {
        let activeEvent = findNextEvent(events);
        let endTime = getEventTimestamp(activeEvent);

        const refresh = () => {
            const nextEvent = findNextEvent(events);
            if (nextEvent.title !== activeEvent.title) {
                activeEvent = nextEvent;
                endTime = getEventTimestamp(activeEvent);
                timeElement.innerHTML = generateTimeContent({event: activeEvent});
            }
            updateCountdown(endTime, homeTime);
        };

        timeElement.innerHTML = generateTimeContent({event: activeEvent});
        refresh();
        intervalId = setInterval(refresh, 1000);
    };

    const initializeHome = () => {
        const {bride, time, link} = data;
        figureElement.innerHTML = generateFigureContent({bride});
        calendarAnchor.href = link.calendar;
        startCountdown(homeTime, time.events);
    };

    initializeHome();
};
