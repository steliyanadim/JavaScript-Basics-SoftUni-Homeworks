function histogram(input){
let numbersCount = Number(input[0]);

p1 = 0;
p2 = 0;
p3 = 0;
p4 = 0;
p5 = 0;


for (let index = 1; index <= numbersCount; index++){
    let currentNumber = Number(input[index])

if(currentNumber < 200) {
p1++
}else if(currentNumber <= 399) {
p2++
}else if(currentNumber <= 599) {
p3++
}else if(currentNumber <= 799){
p4++
}else{
p5++
}
}

console.log(`${(p1 / numbersCount * 100).toFixed(2)}%`);
console.log(`${(p2 / numbersCount * 100).toFixed(2)}%`);
console.log(`${(p3 / numbersCount * 100).toFixed(2)}%`);
console.log(`${(p4 / numbersCount * 100).toFixed(2)}%`);
console.log(`${(p5 / numbersCount * 100).toFixed(2)}%`);

}
histogram(["3","1","2","999"])
