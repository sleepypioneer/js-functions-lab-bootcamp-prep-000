// write your code below!
happyHolidays() {
  return "Happy holidays!";
}

happyHolidays();

happyHolidaysTo(name) {
  return 'Happy Holiday, ${name}!';
}

happyHolidaysTo('Jessica');

happyHolidayTo(holiday, name) {
  return 'Happy ${holiday}, ${name}';
}

happyHolidayTo('Easter', 'Paul');

holidayCountdown(holiday, days) {
  return 'It\'s ${days} days until ${holiday}!';
}

holidayCountdown('Christmas', 40);
