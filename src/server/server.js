require('dotenv').config();
const jwt = require("jsonwebtoken");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3002;
const key = 'hello';


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.listen(port, () => {
        // console.log( process.env);
        // console.log(import.meta.env)
  console.log(`Example app listening at http://localhost:${port}`)
});
app.post("/login", (req, res) => {
  
    const USERNAME = "chelsea";
    const PASSWORD = "8888";
    const { username, password } = req.body;
    
    if (username === USERNAME && password === PASSWORD) {
      const user = {
        id: 1,
        name: "chelsea",
        username: "chelsea",
      };
      
      //console.log( process.env.JWT_KEY);

      const token = jwt.sign(user, key);
      res.json({
        token,
        user,
      });
    } else {
      res.status(403);
      res.json({
        message: "wrong login information",
      });
    }
  })
