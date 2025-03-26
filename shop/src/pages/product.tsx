import { Grid, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
import { PostInfo } from '../data/posts';

export const Product = () => {
  const navigate = useNavigate();
  const handleCardClick = (id: number) => {
    navigate(`/product/${id}`);
  };
  const [posts, setPosts] = useState<PostInfo[]>([]);

  const search = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data: PostInfo[]) => {
        setPosts(data);
      })
      .catch((error) => console.error('Error fetching posts:', error));
  };

  const [productList] = useState(products);

  useEffect(() => {
    search();
  }, []);
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
};
