import React from 'react'
import Button from '@mui/material/Button'
// import makeStyles from '@material-ui/core/styles/makeStyles';
import Header from './components/Header/Header.js'
import Navbar from './components/Navbar/Navbar.js'
import CssBaseline from '@mui/material/CssBaseline'
import GridMUI from './components/playgraound/GridMUI.js'
import './App.css'
import DeleteIcon from '@mui/icons-material/Delete'
import ProductContainer from './components/Products/ProductContainer.js'
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ProductContainer />
    </>
  )
}
export default App
