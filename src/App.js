import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/Product_list/ProductList';
import Navbar from './Pages/Navbar';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

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
