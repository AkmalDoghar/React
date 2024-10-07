import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/slices/productSlice';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  AppBar,
  Toolbar,
  Link,
} from '@mui/material';

export default function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
  );
  const [category, setCategory] = useState('');

  const onClickAddProduct = () => {
    let product = {
      title,
      price,
      description,
      image,
      category,
    };
    console.log('product', product);
    dispatch(addProduct(product));
  };

  const handleGoHome = () => {
    navigate('/'); // Redirects to the homepage
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5', // Light background
        minHeight: '100vh', // Ensures full viewport height
        paddingTop: 4,
      }}
    >
      {/* AppBar for Home navigation */}
      <AppBar position="static" sx={{ backgroundColor: 'purple' }}>
        <Toolbar>
          <Link
            variant="h6"
            color="inherit"
            underline="none"
            onClick={handleGoHome}
            sx={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            Home
          </Link>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container maxWidth="sm">
        <Paper
          elevation={4}
          sx={{
            padding: 6,
            marginTop: 5,
            borderRadius: 3, // Rounded corners for modern look
            backgroundColor: '#ffffff',
          }}
        >
          {/* Heading */}
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#333' }}
          >
            Add a Product
          </Typography>

          {/* Product Form */}
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3, // Space between form fields
              marginTop: 2,
            }}
          >
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            {/* Add Product Button */}
            <Button
              variant="contained"
              color="secondary"
              onClick={onClickAddProduct}
              fullWidth
              sx={{
                fontSize: '1.1rem', // Larger font size
                padding: '12px 0', // More button padding
                marginTop: 2,
                transition: 'transform 0.2s ease-in-out', // Animation
                '&:hover': {
                  transform: 'scale(1.05)', // Slight hover zoom effect
                  backgroundColor: 'green', // Hover color
                },
              }}
            >
              Add Product
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
