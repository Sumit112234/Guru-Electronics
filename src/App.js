import React from 'react';
import './App.css';
import ProductList from './features/Product_list/ProductList';
import Navbar from './Pages/Navbar';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Cart from './features/cart0/Cart';
import Cartcomp from './Pages/Cartcomp';




const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProductList/>
    ),
  },
  {
    path: "login",
    element: <LoginPage/>
  },
  {
    path: "signup",
    element: <SignupPage/>
  },
  {
    path: "cart",
    element: <Cart/>
  },
  {
    path: "cart0",
    element: <Cartcomp/>
  },
  
  
]);


function App() {
  return (
    <div className=''>
      <Navbar>
        Jai shree RAM
        <RouterProvider router={router} />
      </Navbar>
    
     
      
      
    </div>
  );
}

export default App;
