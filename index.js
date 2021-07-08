const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello F World!')
})

const init = () => {
  app.listen(port);
  console.log(`http://localhost:${port}`);
}

init()

