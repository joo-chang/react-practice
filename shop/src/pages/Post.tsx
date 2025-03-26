import { Grid, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
import { PostInfo } from '../data/posts';
import { PostCard } from '../components/PostCard';

export const Post = () => {
  const navigate = useNavigate();
  const handleCardClick = (post: PostInfo) => {
    navigate(`/post/${post.id}`);
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

  useEffect(() => {
    search();
  }, []);
  return (
    <div>
      <h1>Post Page</h1>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid
            item
            onClick={() => {
              handleCardClick(post);
            }}
            key={post.id}
            xs={12}
            sm={6}
            md={4}
          >
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
