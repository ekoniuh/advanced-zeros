module.exports = function getZerosCount(number, base) {
  let arr = [];
  let count = 1;
  let sumNumber = 0;
  let sumMinArr = [];
  let sumMin = 0;

  for (let i = 2; i <= base; i++) {

    while (base % i == 0) {
      arr.push(i);
      base = base / i;
    }
    if (base / i == 1) {
      arr.push(base);
    }
  }

  for (let j = 0; j < arr.length; j++) {

    if (arr[j] == arr[j + 1]) {
      count++; continue
    } else {
      let x = arr[j];
      while (x <= number) {
        sumNumber = Math.floor(number / x);
        sumMin += sumNumber;
        x *= arr[j];
      }
    }
    sumMinArr.push(Math.floor(sumMin / count));
    count = 1;
    sumMin = 0;
  }

  let resultArr = sumMinArr.sort(function (x, y) {
    return x - y;
  });
  return resultArr[0];
}

/*
module.exports = function getZerosCount(number, base) {
  let arr = [];
  let count = 1;
  let sumNumber = 0;
  let sumMinArr = [];
  let sumMin = 0;
  let number2 = number;
  for (let i = 2; i <= base; i++) {
    while (base % i == 0) {
      arr.push(i);
      base = base / i;
    }
    if (base / i == 1) {
      arr.push(base);
    }
  }

  for (let j = 0; j < arr.length; j++) {
    let x = arr[j]
    while (arr[j] == arr[j + 1]) {
      count++;
      j++;
    }
    while (x <= number2) {
      sumNumber = Math.floor(number2 / x);
      sumMin += sumNumber;
      x *= arr[j];
    }
    sumMinArr.push(Math.floor(sumMin / count));
    j += count - 1;
    sumMin = 0;
    count = 1;
  }
  let resultArr = sumMinArr.sort(function (x, y) {
    return x - y;
  });
  return resultArr[0];
}

*/
/*


 module.exports = function getZerosCount(number, base) {
  var number2 = number;
  var base2 = base;
  for (var i = 2; i <= base; i++) {
    if (base2 % i === 0) {
      var k = 0;
      while (base2 % i === 0) {
        base2 = Math.floor(base2 / i);
        k++;
    }
    var number3 = number;
    var m = 0;
    while (number3 / i > 0) {
      m = m + Math.floor(number3 / i);
      number3 = Math.floor(number3 / i);
    }
    if (number2 > m / k) {
      number2 = m / k;
    }
  }
}
return Math.floor(number2);
}
*/