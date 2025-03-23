import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Typography, Box } from '@mui/material';

export const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        {product.title}
      </Typography>
      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: '500px', maxHeight: '500px' }}
      />
      <Typography variant="body1" paragraph>
        {product.description}
      </Typography>
      <Typography variant="h6">Price: {product.price}</Typography>
    </Box>
  );
};
