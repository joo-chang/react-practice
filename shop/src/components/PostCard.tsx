import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export const PostCard = (props) => {
  const post = props.post;
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary' }}
          ></Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {post.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
