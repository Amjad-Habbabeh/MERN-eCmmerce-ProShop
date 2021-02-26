import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

// @desc Fetching all products
// @route Get/api/products
// @access Puplic

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// @desc Fetching single product
// @route Get/api/products/:id
// @access Puplic

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, getProductById };
