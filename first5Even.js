//Create a callback function that will read the first 5 even numbers from a file containing 10 even numbers.
const fs = require("fs").promises;

async function readFirst5Even() {
  const file = await fs.readFile("./static/files/tenEvenNumbers.txt");
  const line = file.toString().split("\n");
  for (let i = 0; i < 5; i++) {
    console.log(line[i]);
  }
}

readFirst5Even();
