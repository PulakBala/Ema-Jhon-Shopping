import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Main from './layouts/Main';
import Shop from './Components/Shop/Shop'
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: () => fetch('product.json'),
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
  },
  
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
