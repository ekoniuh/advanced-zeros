module.exports = function getZerosCount(number, base) {
  const arr = [];
  const sumMinArr = [];
  let number2 = number,
      base2 = base;
  let count = 1;
  let sumNumber = 0,
      sumMin = 0;

  for (let i = 2; i <= base2; i++) {
    while (base2 % i == 0) {
      arr.push(i);
      base2 = base2 / i;
    }
    if (base2 / i == 1) {
      arr.push(base2);
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == arr[j + 1]) {
      count++; continue
    } else {
      let x = arr[j];
      while (x <= number2) {
        sumNumber = Math.floor(number2 / x);
        sumMin += sumNumber;
        x *= arr[j];
      }
    }
    sumMinArr.push(Math.floor(sumMin / count));
    count = 1;
    sumMin = 0;
  }

  let resultArr = sumMinArr.sort((x, y) => x - y);
  return resultArr[0];
}
