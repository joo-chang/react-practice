import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export const ProductCard = (props) => {
  const product = props.product;
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {product.price}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
