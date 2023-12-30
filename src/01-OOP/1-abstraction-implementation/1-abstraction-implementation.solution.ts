/**
 * Challenge:
 * Create Date class, and write some code to print current year, month and the current date.
 */

const date = new Date();

const currentDate = date.getDate();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;

console.log(currentDate, currentMonth, currentYear);
