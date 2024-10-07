import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Container, Paper, Box } from '@mui/material';
import ProductList from '../../components/productList/ProductList';

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: 'purple', // Light background color
        minHeight: '100vh', // Full viewport height
        paddingTop: 3, // Padding at the top
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={4}
          sx={{
            padding: 6,
            borderRadius: 3, // Rounded corners
            backgroundColor: '#ffffff', // Clean white background
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 4,
              borderBottom: '2px solid #e0e0e0', // Light gray divider
              paddingBottom: 2, // Padding below the header
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 'bold', // Bold font
                color: '#333', // Dark color for contrast
              }}
            >
             List Of Product 
            </Typography>

            {/* Animated Add Product Button */}
            <Button
              component={Link}
              to="/products"
              variant="contained"
              color="secondary"
              sx={{
                fontSize: '1.1rem', // Larger font size
                padding: '10px 20px', // Padding for the button
                transition: 'transform 0.2s ease-in-out', // Smooth animation on hover
                '&:hover': {
                  transform: 'scale(1.05)', // Slightly enlarges on hover
                  backgroundColor: 'green', // Custom hover color
                },
              }}
            >
              Add New Product
            </Button>
          </Box>

          {/* Product List Component */}
          <Box
            sx={{
              marginTop: 4,
              paddingTop: 2,
            }}
          >
            <ProductList />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
