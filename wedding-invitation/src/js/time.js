import { data } from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const timeEventsContainer = timeContainer.querySelector('.time-events');

    const createTimeItem = (event) => `
        <div class="time-item">
            <h3>${event.title}</h3>
            <p>
                ${event.day}, ${event.date} ${event.month} ${event.year} <br>
                Pukul ${event.hours.start} WIB sd ${event.hours.finish}
            </p>
            <a href="${event.map}" target="_blank" rel="noopener noreferrer">
                <i class="bx bxs-map-alt" aria-hidden="true"></i>
                <span>Lihat google maps</span>
            </a>
            <p>${event.address}</p>
        </div>
    `;

    timeEventsContainer.innerHTML = data.time.events
        .map(createTimeItem)
        .join('');
};


// import { data } from "../assets/data/data.js";

// export const time = () => {
//     const timeContainer = document.querySelector('.time');
//     // const [marriageDiv, receptionDiv] = timeContainer.querySelectorAll('div div');
//     const [marriageDiv] = timeContainer.querySelectorAll('div div');
//     const mapLink = timeContainer.querySelector('a');
//     const addressParagraph = timeContainer.querySelector('a + p');

//     const createTimeListItem = (title, details) => (
//         `<h3>${title}</h3>
//          <p>${details.day}, ${details.date} ${details.month} ${details.year} <br> 
//          Pukul ${details.hours.start} WIB sd ${details.hours.finish}</p>`
//     );

//     marriageDiv.innerHTML = createTimeListItem('Akad', data.time.marriage);
//     // receptionDiv.innerHTML = createTimeListItem('Resepsi', data.time.reception);

//     mapLink.href = data.link.map;
//     addressParagraph.textContent = data.time.address;
// };