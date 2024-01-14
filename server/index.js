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
  database: "userRegTest"
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
  const q = "SELECT * FROM email"
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

  db.query("INSERT INTO users (username, email, password) VALUES (? ? ?)", 
  [username, email, hashedPassword], (err, result) => {
    try {

    } catch(err) {
      console.log(err);
    }
  });
});


app.listen(3000, () => console.log('Connected to server'));





