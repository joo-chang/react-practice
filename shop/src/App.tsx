import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { Header } from './components/header';
import { CardComponent } from './components/card';
import { useState } from 'react';
import { products } from './data/products';
import { Route, Routes } from 'react-router-dom';
import { Product } from './pages/product';
import { ProductDetail } from './pages/productDetail';

function App() {
  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Header />
        <Container component="main" sx={{ mt: 8, py: 6, flexGrow: 1 }}>
          <Routes>
            <Route path="/" />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Container>
      </Box>
    </>
  );
}

export default App;
