import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import bookRoutes from './routes/bookRoutes.js';

dotenv.config();

mongoose.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/library?authSource=admin`);

const app = express();

app.use(express.json());

app.use('/books', bookRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});