import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { Header } from './components/header';
import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Post } from './pages/Post';
import { PostDetail } from './pages/PostDetail';
import { ProductDetail } from './pages/productDetail';
import { Product } from './pages/product';
import Cart from './pages/Cart';
import Recently from './pages/Recently';

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
            <Route path="/post" element={<Post />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/about" element={<About />}>
              <Route path="member" element={<div>Member</div>} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/recently" element={<Recently />} />
          </Routes>
        </Container>
      </Box>
    </>
  );
}

export default App;
