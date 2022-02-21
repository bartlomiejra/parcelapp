import Grid from '@mui/material/Grid'
import React from 'react'
const GridMUI = () => {
  return (
    <Grid container>
      <Grid sx={{ backgroundColor: 'red' }} md={4} item>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloremque
        dolor consequuntur tempore, corrupti ratione amet modi, cupiditate
        excepturi, perspiciatis accusantium! Alias, deleniti! Accusantium
        tenetur vitae accusamus deserunt? Odit, doloribus?
      </Grid>
      <Grid sx={{ backgroundColor: 'pink' }} md={4} item>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloremque
        dolor consequuntur tempore, corrupti ratione amet modi, cupiditate
        excepturi, perspiciatis accusantium! Alias, deleniti! Accusantium
        tenetur vitae accusamus deserunt? Odit, doloribus?
      </Grid>
      <Grid sx={{ backgroundColor: 'green' }} md={4} item>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloremque
        dolor consequuntur tempore, corrupti ratione amet modi, cupiditate
        excepturi, perspiciatis accusantium! Alias, deleniti! Accusantium
        tenetur vitae accusamus deserunt? Odit, doloribus?
      </Grid>
    </Grid>
  )
}

export default GridMUI
