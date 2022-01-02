const fs = require("fs").promises;
const path = require("path");

fs.readdir(path.resolve(__dirname))
  .then(file => console.log(file))
  .catch(err => console.log(err));