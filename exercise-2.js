// Destructure the first, second and fifth value from
// the array. You are free to call the variables whatever
// you would like. Once you have destructured the values,
// log the variables so you know that you have destructured
// them correctly.

const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const [first, second, , , fifth] = values;

console.log(first, second, fifth);
