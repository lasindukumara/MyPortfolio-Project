import express from  "express";
import { Request, Response } from 'express';
import dotenv from 'dotenv';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});



