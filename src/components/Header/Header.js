import React from 'react'
import Grid from '@mui/material/Grid'

import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import imageheader from '../../../public/images/peep-16.png'
const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#467',
        minHeight: '80vh',
      }}
    >
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            lg: 'row',
            justifyContent: 'space-center',
            alignItems: 'center',
          },
        }}
      >
        {' '}
        <Grid
          item
          md={8}
          sx={12}
          component="div"
          // sx={{
          //   display: 'flex',
          //   flexDirection: 'column',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          //   pl: 2,
          // }}
        >
          <Typography
            sx={{
              fontFamily: 'Josefin Sans',
              fontWeight: 'bold',
              fontSize: '3rem',
              color: 'white',
            }}
            variant="h2"
          >
            Find Your New Favorite
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Josefin Sans',
              fontWeight: 'bold',
              fontSize: '3rem',
              color: 'white',
            }}
            variant="h2"
          >
            Collect at Winter
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Josefine Sans',
              fontWeight: 'bold',
              fontSize: '3rem',
              color: 'white',
            }}
            variant="h2"
          >
            sale 2022
          </Typography>
        </Grid>
        <Grid md={4} item>
          <Box
            component="img"
            // width={auto}
            // height={auto}
            sx={{ width: '70%', display: 'flex', alignItems: 'center' }}
            src={imageheader}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Header
