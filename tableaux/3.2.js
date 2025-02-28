let arr = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];
let sum = 0;
let sum2 = 0;

for (const number of arr) {sum += number;

}
const average = sum / arr.length;
console.log(average);

for (const num of arr2) {sum2 += num;

}
const average1 = sum2 / arr2.length;
console.log(average1);
