const express = require('express');
const app = express();

app.get('/',(req,res) => {
  res.send("Hello from the backend");
});

const PORT = 3000;
app.listen(PORT,(err) => {
  if(err)
    console.log(err);
  else {
    console.log(`Server running at the port : ${PORT}`);
  }
});