var fs = require("fs");

function readFirstFiveCallback(error, fileData) {
  if (error) {
    console.error(error);
    return;
  }
  const Lines = fileData.toString().split("\n");
  Lines.slice(0, 5).forEach((line) => {
    console.log(line);
  });
}

fs.readFile("./static/files/tenEvenNumbers", readFirstFiveCallback);
