import {
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Badge,
} from '@mui/material'
import React, { useState } from 'react'
import { Box } from '@mui/system'
import Button from '@mui/material/Button'
import ApiIcon from '@mui/icons-material/Api'
import DrawerComponent from './DrawerComponent.js'
import MenuIcon from '@mui/icons-material/Menu'
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [openDrawer, setOpenDrawer] = useState(true)
  const openMenu = Boolean(anchorEl)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  console.log(matches)
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Box
        elevation={0}
        color="primary"
        // sx={{ backgroundColor: 'black' }}
        sx={{ backgroundColor: 'white' }}
      >
        <Toolbar>
          <Box
            sx={{
              padding: '10px 0px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
            components="div"
          >
            <Box>
              <IconButton>
                <ApiIcon sx={{ fontSize: '2,4rem' }} color="secondary" />
              </IconButton>
            </Box>
            {matches ? (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
              <Box sx={{ display: 'flex' }}>
                <Typography
                  sx={{
                    marginRight: '20px',
                    cursor: 'pointer',
                    color: 'green',
                  }}
                >
                  Brand
                </Typography>
                <Typography
                  sx={{
                    marginRight: '20px',
                    cursor: 'pointer',
                    color: 'green',
                  }}
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={openMenu ? 'true' : undefined}
                  onClick={handleClick}
                >
                  Items
                </Typography>
                <Menu
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                  id="basic-menu"
                >
                  <MenuItem onClose={handleClose}>Men</MenuItem>
                  <MenuItem onClose={handleClose}>Woman</MenuItem>
                  <MenuItem onClose={handleClose}>Child</MenuItem>
                  <MenuItem onClose={handleClose}>Your mom</MenuItem>
                  <MenuItem onClose={handleClose}>Genderfluid</MenuItem>
                </Menu>
                <Typography
                  sx={{
                    marginRight: '20px',
                    cursor: 'pointer',
                    color: 'green',
                  }}
                >
                  New
                </Typography>

                <Typography
                  sx={{
                    marginRight: '20px',
                    cursor: 'pointer',
                    color: 'green',
                  }}
                >
                  Music
                </Typography>

                <Typography
                  sx={{
                    marginRight: '20px',
                    cursor: 'pointer',
                    color: 'green',
                  }}
                >
                  FAQ
                </Typography>

                <Typography
                  sx={{
                    marginRight: '20px',
                    cursor: 'pointer',
                    color: 'green',
                  }}
                >
                  Ok
                </Typography>
              </Box>
            )}

            <Box sx={{ color: 'green' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button sx={{ color: '#ff4081' }}>Try Now</Button>

                {matches ? (
                  <IconButton onClick={() => setOpenDrawer(true)}>
                    <MenuIcon />
                  </IconButton>
                ) : (
                  <IconButton>
                    <Badge>
                      {/* <MenuIcon sx={{ fontSize: '2,4rem' }} color="secondary" /> */}
                    </Badge>
                  </IconButton>
                )}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </>
  )
}

export default Navbar
