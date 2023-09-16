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


  const Monday = ['17:00','18:00','19:00','20:00','21:00'];
  const Tuesday = ['9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'];
  const leftEvents = [{'title': 'Opening KeyNote', 'description':'By Prof. Debabrata Das - Director, IIIT Bangalore.','start':'17:30','finish':'18:00'}]
  const rightEvents = [{'title': 'Opening KeyNote', 'description':'By Prof. Debabrata Das - Director, IIIT Bangalore.','start':'17:30','finish':'18:00'}]

export {Event_data,timeLineLst,Monday,Tuesday,leftEvents,rightEvents};
