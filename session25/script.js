// Easy tasks (5) //

// Task 1

function ountDownFrom(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}
ountDownFrom(10);
console.log("========== Task 1 ============");
// Task 2
function printArrayElements(array1) {
  let fruits = "";
  for (const fruit of array1) {
    fruits = fruits + fruit + ", ";
  }
  console.log(fruits);
}
printArrayElements(["Apple", "Banana", "Cherry"]);

console.log("========== Task 2 ==============");

// Task 3
function sumNumbersUpTo(n) {
  let i = 0;
  let total = 0;
  while (i < n) {
    i++;
    total = total + i;
  }
  console.log(total);
}
sumNumbersUpTo(5);
console.log("========== Task 3 ==============");

// Task 4
function repeatString(str, n) {
  let res = "";
  do {
    res += str;
    n--;
  } while (n > 0);
  console.log(res);
}
repeatString("Hello", 3);
console.log("========= Task 4 =============");

// Task 5

function printObjectKeys(obj) {
  let out = " ";
  for (let key in obj) {
    out = out + key + ", ";
  }
  console.log(out);
}
printObjectKeys({ name: "Alice", age: 25 });
console.log("========= Task 5 =============");

// Medium tasks (4)

// Task 1
function filterOdds(numbers) {
  let newArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newArray.push(numbers[i]);
    }
  }

  console.log(newArray);
}

filterOdds([1, 2, 3, 4, 5]);

console.log("======== Task 6 =======");

// Task 2
function findMaxValue(numbers) {
  let max = numbers[0];

  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }

  console.log(max);
}

findMaxValue([10, 20, 5, 30]);
console.log("========== Task 7 ==========");

// TODO - 5 task - I will continue tomorrow.