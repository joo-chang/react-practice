import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
import { PostInfo } from '../data/posts';

export default function Product() {
  const navigate = useNavigate();
  const handleCardClick = (id: number) => {
    navigate(`/product/${id}`);
  };
  const [posts, setPosts] = useState<PostInfo[]>([]);

  const [productList] = useState(products);

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
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
