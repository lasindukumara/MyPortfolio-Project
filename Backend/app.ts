import express from 'express';
import dotenv from 'dotenv';
import sqlite3 from 'sqlite3';

dotenv.config();
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}}`);
});

app.listen(process.env.PORT1, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT1}}`);
});

app.listen(process.env.PORT2, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT2}}`);
});