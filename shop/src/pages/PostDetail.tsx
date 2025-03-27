import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Input } from '@mui/material';
import { PostInfo } from '../data/posts';
export const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<PostInfo>();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) => response.json())
      .then((data: PostInfo) => {
        setPost(data);
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, [id]);

  return post ? (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        {' '}
        {post.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {post.body}
      </Typography>
    </Box>
  ) : (
    <div>post not found</div>
  );
};
