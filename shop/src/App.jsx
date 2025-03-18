import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import { Header } from './components/header';
import { CardComponent } from './components/card';

function App() {
  // Sample product data - replace this with actual data fetching in a real app
  const products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'This is the description of Product 1.',
      image: 'https://picsum.photos/id/237/300/200', // Example image
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'This is the description of Product 2.',
      image: 'https://picsum.photos/id/238/300/200', // Example image
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'This is the description of Product 3.',
      image: 'https://picsum.photos/id/239/300/200', // Example image
    },
    {
        id: 4,
        title: 'Product 4',
        description: 'This is the description of Product 4.',
        image: 'https://picsum.photos/id/240/300/200', // Example image
    },
    {
        id: 5,
        title: 'Product 5',
        description: 'This is the description of Product 5.',
        image: 'https://picsum.photos/id/241/300/200', // Example image
    },
    {
        id: 6,
        title: 'Product 6',
        description: 'This is the description of Product 6.',
        image: 'https://picsum.photos/id/242/300/200', // Example image
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container component="main" sx={{ py: 6, flexGrow: 1 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Our Shoe Shop
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Explore our latest collection of amazing shoes.
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <CardComponent
                title={product.title}
                description={product.description}
                image={product.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
