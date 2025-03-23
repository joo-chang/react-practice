import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid2,
} from '@mui/material';
import { Header } from './components/header';
import { CardComponent } from './components/card';
import { useState } from 'react';
import { products } from './data/products';


function App() {  
  const [productList] = useState(products);

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
        <Grid2 container spacing={4}>
          {productList.map((product) => (
            <Grid2 item key={product.id} xs={12} sm={6} md={4}>
              <CardComponent
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

export default App;
