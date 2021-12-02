const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
// recognize the incoming Request Object as a JSON Object
app.use(express.json());

app.listen(3000, () => {
  console.log(`API root available at: http://localhost:${3000}/`);
});
