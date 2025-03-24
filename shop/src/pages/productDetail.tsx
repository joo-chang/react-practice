import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Typography, Box } from '@mui/material';

export const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [showSale, setShowSale] = useState(true);
  if (!product) {
    return <div>Product not found</div>;
  }

  useEffect(() => {
    const time = setTimeout(() => {
      setShowSale(false);
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, []);
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        {product.title}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {showSale && <div> 3초 안에 구매하면 할인.</div>}
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
