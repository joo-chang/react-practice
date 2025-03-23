import { Grid, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { products } from '../data/products';
import { CardComponent } from '../components/card';
import { useNavigate } from 'react-router-dom';

export const Product = () => {
  const navigate = useNavigate();
  const handleCardClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  const [productList] = useState(products);

  useEffect(() => {}, [productList]);
  return (
    <div>
      <h1>Product Page</h1>
      <Grid container spacing={4}>
        {productList.map((product) => (
          <Grid
            item
            onClick={() => {
              handleCardClick(product.id);
            }}
            key={product.id}
            xs={12}
            sm={6}
            md={4}
          >
            <CardComponent product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
