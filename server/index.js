import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bcrypt from "bcrypt";
import { useState, useEffect } from "react";

const app = express();

app.use(express.json());
app.use(cors());



const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dermott23!",
  database: "deltahacks-demo"
}) 

// app.get("/register", (req, res) => {
//   const q = "SELECT * FROM password"
//   db.query(q, (err, data) => {
//       if (err) {
//           return res.json(err)
//       } else {
//           return res.json(data)
//       }
//   })
// })

app.get("/register", (req, res) => {
  const q = "SELECT * FROM users"
  db.query(q, (err, data) => {
      if (err) {
          return res.json(err)
      } else {
          return res.json(data)
      }
  })
})

app.post('/register', async (req, res) => {

  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);


  db.query("INSERT INTO users (username, email, password) VALUES (?,?,?)", 
  [username, email, hashedPassword], (err, result) => {
          if (err) return res.json(err);

      console.log("this returns");
      return res.json(result);
  });
});

app.post('/signin', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
      if (err || results.length === 0) {
          return res.status(401).send('No user with that username');
      }

      const user = results[0];
      bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err || !isMatch) {
              return res.status(401).send('Password is incorrect');
          }

          const token = jwt.sign({ id: user.id }, 'yourSecretKey', { expiresIn: '1h' });
          res.status(200).json({ token });
      });
  });
});


app.listen(3000, () => console.log('Connected to server'));





