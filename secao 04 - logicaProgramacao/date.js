console.log(Date.now()); // return a timeStamp

let myDate = new Date;

console.log(myDate);
console.log(myDate.getDate()); // day of the month
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
console.log(myDate.getDay()); // day of the week

let data = new Date(32424526); // data from timeStamp
console.log(data)

data = new Date(2000,11); // year and month
console.log(data)

data = new Date(2001,11, 29); // year, month and day
console.log(data)

data = new Date(2002,11, 29, 23); // year, month, day and hours
console.log(data)

data = new Date(2003,11, 29, 23, 59); // year, month, day, hours and minutes
console.log(data)

data = new Date(2004,11, 29, 23, 59, 999); // year, month, day, hours, minutes and mileseconds
console.log(data.getMilliseconds())

data = new Date('2005-12-17T03:24:00'); // from string
console.log(data)

data = new Date(2006, 11, 17, 3, 24, 0);
console.log(data)


