import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material'
import image1 from '../../..//public/images/peep-1.png'
import image2 from '../../..//public/images/peep-2.png'
import MobileCategory from './MobileCategory'
import DesktopCategory from './DesktopCategory'
import ProductList from './ProductList'
const ProductContainer = () => {
  return (
    <Box sx={{ minHeight: '60vh', mr: 2, ml: 2, mt: -23 }}>
      <Grid sx={{ mb: 4 }} container spacing={2}>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              lg: 'row',
              justifyContent: 'space-center',
              alignItems: 'center',
            },
          }}
          md={6}
          item
        >
          <Box
            sx={{ width: { xs: '100%', lg: '40%' } }}
            component="img"
            src={image1}
          ></Box>
          <Box sx={{ paddingLeft: '10px', mt: { lg: 20, xs: 2 } }}>
            <Typography sx={{ fontWeight: 'bold' }} variant="h4">
              Implants
            </Typography>
            <Typography sx={{ fontSize: '1.2rem' }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Typography>
            <Typography
              sx={{ fontWeight: 'bold', color: '#ff4081' }}
              variant="h6"
            >
              $110.00
            </Typography>
            <Button variant="outlined" size="medium">
              Add to cart
            </Button>
          </Box>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              lg: 'row',
              justifyContent: 'space-center',
              alignItems: 'center',
            },
          }}
          md={6}
          item
        >
          <Box
            sx={{ width: { xs: '100%', lg: '40%' } }}
            component="img"
            src={image2}
          ></Box>
          <Box sx={{ paddingLeft: '10px', mt: { lg: 20, xs: 2 } }}>
            <Typography sx={{ fontWeight: 'bold' }} variant="h4">
              Support
            </Typography>
            <Typography sx={{ fontSize: '1.2rem' }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Typography>
            <Typography
              sx={{ fontWeight: 'bold', color: '#ff7781' }}
              variant="h6"
            >
              $520.00
            </Typography>
            <Button variant="outlined" size="medium">
              Add to cart
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
        <DesktopCategory />
      </Box>
      <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
        <MobileCategory />
      </Box>
      <ProductList />
    </Box>
  )
}

export default ProductContainer
