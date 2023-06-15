import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import styled from 'styled-components'
import Address from './Component/Address'
import Checkout from './Component/Checkout'
import Home from './Component/Home'
import Login from './Component/Login'
import Payment from './Component/Payment'
import SignUp from './Component/SignUp'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AddProduct from './Component/AddProduct'
import Orders from './Component/Orders'
const promise = loadStripe(
  "pk_test_51MrjACSAFtiuk7YQg9hi4Z4TQdvb0QCAIT2UONA7SyggidI9hq5anbswHiKrS6sTAJObDDYetiarAfuoYhsgRJ1E00354PCXJi"
);
function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/address' element={<Address/>}/>
          <Route path='/payment' element={ <Elements stripe={promise}><Payment/></Elements>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Container>
    </Router>
  )
}

const Container=styled.div`
width:100vw;

`

export default App;