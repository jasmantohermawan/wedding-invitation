export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Jasmanto Hermawan',
            child: 'Anak kedua',
            father: 'Hernoko',
            mother: 'Ruminah',
            image: './src/assets/images/laki.png'
        },
        P: {
            id: 2,
            name: 'Silfi Retnosari',
            child: 'Anak Pertama',
            father: 'Rubani Sutanto',
            mother: 'Kholifatun',
            image: './src/assets/images/perempuan.png'
        },

        couple: './src/assets/images/couple.png'
    },

    // time: {
    //     marriage: {
    //         year: '2026',
    //         month: 'April',
    //         date: '20',
    //         day: 'Senin',
    //         hours: {
    //             start: '11.00',
    //             finish: 'Selesai'
    //         }
    //     },
    //     address: 'KUA Kecamatan Cimanggis, Perum Permata Puri, Jl. Zamrud Raya VI No.3, Cisalak Ps., Kec. Cimanggis, Kota Depok, Jawa Barat 16452'
    // },

    time: {
        events: [
            {
                title: 'Akad',
                day: 'Senin',
                date: '20',
                month: 'April',
                year: '2026',
                hours: {
                    start: '11:00',
                    finish: 'Selesai'
                },
                address: 'KUA Kecamatan Cimanggis, Perum Permata Puri, Jl. Zamrud Raya VI No.3, Cisalak Ps., Kec. Cimanggis, Kota Depok, Jawa Barat 16452',
                map: 'https://maps.app.goo.gl/NVTrqE46zhEF5psY9'
            },
            {
                title: 'Syukuran',
                day: 'Sabtu',
                date: '25',
                month: 'April',
                year: '2026',
                hours: {
                    start: '10:00',
                    finish: 'Selesai'
                },
                address: 'Metro Parung Panjang, Blok Q2 Nomor 16, Cibunar, Parung Panjang, Kabupaten Bogor, Jawa Barat 16330',
                map: 'https://maps.app.goo.gl/crkub6kFuRq1N756A'
            }
        ]
    },

    link: {
        calendar: 'https://calendar.app.google/7bR7wEXxhXUxQB287',
        // map: 'https://maps.app.goo.gl/NVTrqE46zhEF5psY9',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/01.png'
        },
        {
            id: 2,
            image: './src/assets/images/02.png'
        },
        {
            id: 3,
            image: './src/assets/images/03.png'
        },
        {
            id: 4,
            image: './src/assets/images/04.png'
        },
        {
            id: 5,
            image: './src/assets/images/05.png'
        },
        {
            id: 6,
            image: './src/assets/images/06.png'
        },
        {
            id: 7,
            image: './src/assets/images/07.png'
        },
        {
            id: 8,
            image: './src/assets/images/08.png'
        },
        {
            id: 9,
            image: './src/assets/images/09.png'
        },
        {
            id: 10,
            image: './src/assets/images/10.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'SILFI RETNOSARI',
            icon: './src/assets/images/bca.png',
            rekening: '7401107545'
        },
        {
            id: 2,
            name: 'JASMANTO HERMAWAN',
            icon: './src/assets/images/jago.png',
            rekening: '501859088434'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbwmf3ygiZymvIOv2oxS8WHfGnqkz2scHnS-Vfm_KhOvvvmGJPHndD4MrZS_8H5_dwoY/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}

const getEventTimestamp = (event) => {
    const {year, month, date, hours} = event;
    const [hour, minute] = hours.start.split('.');
    return new Date(`${year}-${String(monthNameToNumber(month)).padStart(2, '0')}-${String(date).padStart(2, '0')}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00`).getTime();
};
