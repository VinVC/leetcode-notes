
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 * 给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。

输入为三个整数：day、month 和 year，分别表示日、月、年。

您返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}。

 */
var dayOfTheWeek = function (day, month, year) {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  if (month < 3) {
    year--
    month += 12
  }
  let weekday = (day + 2 * month + Math.floor(3 * (month + 1) / 5) + year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400) + 1) % 7
  return weekdays[weekday]
};

console.log(dayOfTheWeek(28, 8, 2020))