
var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year
var hours = new Date().getHours(); //Current Hours
var min = new Date().getMinutes(); //Current Minutes
var allDate= date + '/' + month + '/' + year + ' ' + hours + ':' + min 

export const ticketsData =[
    {
      id: '0',
      date:allDate,
      ticketSubject:'Email issues',
      description:'Description Description Description Description Description Description Description'
    },
    {
        id: '1',
        date:allDate,
        ticketSubject:'Help',
        description:'Description Description Description Description Description Description Description'
    },
    {
        id: '3',
        date:allDate,
        ticketSubject:'laptop fixing',
        description:'Description Description Description Description Description Description Description'
       
    },
    {
        id: '3',
        date:allDate,
        ticketSubject:'laptop fixing',
        description:'Description Description Description Description Description Description Description'
       
    },
    {
        id: '3',
        date:allDate,
        ticketSubject:'laptop fixing',
        description:'Description Description Description Description Description Description Description'
       
    },
  ];