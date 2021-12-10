const PORT = 3000;
const express = require("express");
const app = express();

app.use(express.static('public'));
app.get('/data', (req, res) => {
  
  const data = {
    data: "hello world"
  }
  res.json(data)
})
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});