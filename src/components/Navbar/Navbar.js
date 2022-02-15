import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system'
import Button from '@mui/material/Button'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
function Navbar() {
  return (
    <AppBar elevation={0} color="primary" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
          components="div"
        >
          <Box>
            <IconButton>
              <MenuOutlinedIcon color="primary" />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography
              sx={{ marginRight: '20px', cursor: 'pointer', color: 'green' }}
            >
              Brand
            </Typography>

            <Typography
              sx={{ marginRight: '20px', cursor: 'pointer', color: 'green' }}
            >
              Home
            </Typography>

            <Typography
              sx={{ marginRight: '20px', cursor: 'pointer', color: 'green' }}
            >
              New
            </Typography>

            <Typography
              sx={{ marginRight: '20px', cursor: 'pointer', color: 'green' }}
            >
              Music
            </Typography>

            <Typography
              sx={{ marginRight: '20px', cursor: 'pointer', color: 'green' }}
            >
              FAQ
            </Typography>

            <Typography
              sx={{ marginRight: '20px', cursor: 'pointer', color: 'green' }}
            >
              Ok
            </Typography>
          </Box>
          <Box>
            <Typography>
              <Button variant="container" >Try Now</Button>
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
