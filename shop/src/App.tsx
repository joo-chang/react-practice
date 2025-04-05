import React, { Suspense } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { Header } from './components/header';
import { Route, Routes } from 'react-router-dom';

const Product = React.lazy(() => import('./pages/product'));
const ProductDetail = React.lazy(() => import('./pages/productDetail'));
const Post = React.lazy(() => import('./pages/Post'));
const PostDetail = React.lazy(() => import('./pages/PostDetail'));
const About = React.lazy(() => import('./pages/About'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Recently = React.lazy(() => import('./pages/Recently'));

function App() {
  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Header />
        <Container component="main" sx={{ mt: 8, py: 6, flexGrow: 1 }}>
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        </Container>
      </Box>
    </>
  );
}

export default App;
