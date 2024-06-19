require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const productRoutes = require('./routes/product');

const app = express();
app.use(express.json());

connectDB();

app.use('/products', productRoutes);

const port = process.env.PORT || 8082;
app.listen(port, () => {
  console.log(`Product service running on port ${port}`);
});
