//This is my first node js file.
var fs = require("fs");

fs.writeFileSync("Backend.txt", "First Backend file.");

fs.writeFile("Backend.txt", "First Backend file.", error => {
    console.log(error);
});

// fs.readFileSync("Backend.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });
