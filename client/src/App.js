import styled from 'styled-components';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Container = styled.div`
    margin-top: -8px;
    margin-left: -8px;
    font-family: 'Roboto', sans-serif;
`;


function App() {
  const Layout = () => {
    return (
      <Container>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </Container>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/books",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/book/:id",
          element: <Product />,
        },
      ],
    },
    
  ]);

  return <RouterProvider router={router} />;

};

export default App;
