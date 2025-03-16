function getPreviousDay(year, month, day) {
    // Create a new Date object with the given year, month, and day
    let date = new Date(year, month - 1, day);
    
    // Subtract one day (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    date.setDate(date.getDate() - 1);
    
    // Get the previous day, month, and year
    let previousYear = date.getFullYear();
    let previousMonth = date.getMonth() + 1; // Months are 0-based in JavaScript Date
    let previousDay = date.getDate();
    
    // Format the month and day with leading zeros if necessary
    // previousMonth = previousMonth.toString().padStart(2, '0');
    // previousDay = previousDay.toString().padStart(2, '0');

    previousMonth = previousMonth.toString();
    previousDay = previousDay.toString();
    
    // Return the formatted date
    return `${previousYear}-${previousMonth}-${previousDay}`;
}
console.log(getPreviousDay(2016, 9, 30));
console.log(getPreviousDay(2015, 5, 10))

