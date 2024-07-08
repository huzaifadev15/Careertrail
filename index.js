import express from 'express';
import cors from 'cors';
import { userRouter } from './userroutes.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth ', userRouter);
app.listen(3000, () => {
  console.log('server is running');
});
