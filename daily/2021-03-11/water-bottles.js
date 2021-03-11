/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 * 思路：
 * 如果当前手里大于等于numExchange个空瓶 sum+1
 */
var numWaterBottles = function (numBottles, numExchange) {
  let sum = numBottles;
  while (numBottles >= numExchange) {
    let wine = Math.floor(numBottles / numExchange);
    sum += wine;
    numBottles = numBottles - wine * numExchange + wine;
  }
  return sum;
};
