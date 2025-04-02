import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Typography, Box, Input, Tab } from '@mui/material';
import { TabList } from '@mui/lab';
import { TabContext } from '@mui/lab';
export const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [price, setPrice] = useState(product?.price);
  const [showSale, setShowSale] = useState(true);
  if (!product) {
    return <div>Product not found</div>;
  }
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      setShowSale(false);
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, []);
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        {product.title}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {showSale && <div> 3초 안에 구매하면 할인.</div>}
      </Typography>
      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: '500px', maxHeight: '500px' }}
      />
      <Typography variant="body1" paragraph>
        {product.description}
      </Typography>
      <Typography variant="h6">가격 흥정</Typography>
      <Input
        value={price}
        onChange={(e) => {
          if (isNaN(Number(e.target.value))) {
            return alert('숫자만 입력해주세요');
          }
          setPrice(Number(e.target.value));
        }}
      />
      <Typography variant="h6">Price: {price}</Typography>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" onClick={() => setValue('1')} />
            <Tab label="Item Two" value="2" onClick={() => setValue('2')} />
            <Tab label="Item Three" value="3" onClick={() => setValue('3')} />
          </TabList>
        </Box>
      </TabContext>
      <TabPanel value={value} />
    </Box>
  );
};

function TabPanel({ value }) {
  if (value == '1') {
    return <div>Item One</div>;
  } else if (value == '2') {
    return <div>Item Two</div>;
  } else if (value == '3') {
    return <div>Item Three</div>;
  }
}
