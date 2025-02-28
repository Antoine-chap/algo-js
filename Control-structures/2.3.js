const start = 1
const end = 100

for (let i = start; i <= end; i++) {
    if (i % 2 === 0){
    console.log(i);
  }
}

let i = start;

while (i <= end) {
    if (i % 2 === 0){
        console.log(i);
    }
    i ++;
}