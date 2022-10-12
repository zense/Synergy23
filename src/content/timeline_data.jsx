class Event_data {
    constructor(time, content, byWhom) {
      this.time = time;
      this.content = content;
      this.byWhom = byWhom;
    }
  }

const timeLineLst = {
    "monday" : {
        '8:00': 
            new Event_data(
                '17:30 - 18:00',
                'Registration',
                'By Prof. Debabrata Das -Director, IIIT Bangalore'
            ),
        //     new Event_data(`
        //         '17:30 - 18:00',
        //         'Registration',
        //         'By Prof. Debabrata Das -Director, IIIT Bangalore'
        //     ),
        // ],
        '9:00': 
            new Event_data(
                '17:30 - 18:00',
                'Registration',
                'By Prof. Debabrata Das -Director, IIIT Bangalore'
            ),
        
        '10:00': 
            new Event_data(
                '17:30 - 18:00',
                'Registration',
                'By Prof. Debabrata Das -Director, IIIT Bangalore'
            ),
        
    }
};

export {Event_data,timeLineLst};
