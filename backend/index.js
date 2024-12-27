import express from 'express';
import cors from 'cors';
import products from './data/products.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';

connectDB(); // connection to mongDb

const app = express();
const PORT = process.env.PORT || 8000;

//middleaeare
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const singleProduct = products.find(
    (product) => product._id === req.params.id
  );
  res.json(singleProduct);
});

app.listen(PORT, () => [console.log(`Server is listening to port ${PORT}`)]);
