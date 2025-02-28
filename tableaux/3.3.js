let arr = [1, 2, 3, 4, 5];
let copie = [];
let copie2 = arr.slice();

for (let i = 0; i < arr.length; i++) {
    copie.push(arr[i]);
}
console.log(copie);

console.log(copie2);