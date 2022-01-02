const fs = require("fs").promises;
const path = require("path");

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname)

  const files = await fs.readdir(rootDir);

  walk(files);
}

function walk(files) {
  for (let file of files) {
    console.log(file);
  }
}

readdir();