class event {
    constructor(this.time, this.event, this.byWhom);
}

const timeLineLst = [
    'monday': {
        '8:00': [
            new event(
                '17:30 - 18:00',
                'Registration',
                'By Prof. Debabrata Das -Director, IIIT Bangalore'
            ),
            new event(
                '17:30 - 18:00',
                'Registration',
                'By Prof. Debabrata Das -Director, IIIT Bangalore'
            ),
        ],
        '9:00-10:00': [
            new event(
                '17:30 - 18:00',
                'Registration',
                'By Prof. Debabrata Das -Director, IIIT Bangalore'
            ),
        ],
        '10:00-11:00': [
            new event(
                '17:30 - 18:00',
                'Registration',
                'By Prof. Debabrata Das -Director, IIIT Bangalore'
            ),
        ],

    },
];

export default timeLineLst;