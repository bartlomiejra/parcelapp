import React from 'react'

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

// eslint-disable-next-line react/prop-types
const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer anchor="right" open={openDrawer}>
      <List>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>Brand</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider buttonon Click={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>Items</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>New</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>Music</ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  )
}
export default DrawerComponent
