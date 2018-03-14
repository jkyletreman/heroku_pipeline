const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Moto');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Ready to... serve on PORT ${PORT}`);
});
