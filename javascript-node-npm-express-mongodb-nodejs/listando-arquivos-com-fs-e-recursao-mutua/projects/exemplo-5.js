const fs = require('fs').promises;
const path = require('path');

fs.stat(__filename)
  .then(info => console.log(info))
  .catch(err => console.error(err));