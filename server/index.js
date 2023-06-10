import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import CourseRouter from './routes/course.js';
import UserRouter from './routes/user.js';
import cookieParser from 'cookie-parser';
import PriceRouter from './routes/price.js';
import authRoute from './routes/auth.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/course', CourseRouter);
app.use('/users', UserRouter);
app.use('/price', PriceRouter);
app.use('/auth', authRoute);

const PORT = process.env.PORT || 8801;

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
  })
  .catch((err) => console.log(err));
