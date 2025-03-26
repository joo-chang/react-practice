import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Input } from '@mui/material';
import { PostInfo } from '../data/posts';
export const PostDetail = () => {
  const { id } = useParams();

  const [post, setPosts] = useState<PostInfo>();
  const [showSale, setShowSale] = useState(true);
  if (!post) {
    return <div>post not found</div>;
  }
  const search = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) => response.json())
      .then((data: PostInfo) => {
        setPosts(data);
      })
      .catch((error) => console.error('Error fetching posts:', error));
  };
  useEffect(() => {
    search();
  }, []);

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {showSale && <div> 3초 안에 구매하면 할인.</div>}
      </Typography>
      <Typography variant="body1" paragraph>
        {post.body}
      </Typography>
      <Typography variant="h6">가격 흥정</Typography>
    </Box>
  );
};
