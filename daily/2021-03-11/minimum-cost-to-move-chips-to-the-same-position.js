/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let odd = 0,
    even = 0;
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 1) {
      odd++;
    } else {
      even++;
    }
  }
  return Math.min(odd, even);
};
