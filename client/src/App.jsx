import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './App.css'
import Header from './component/Header'
import ProductItem from './component/produtlist'
import ProductDetailsPage from './component/productdetails'
import axios from 'axios';
import { Link, Outlet, createBrowserRouter } from "react-router-dom";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <ProductList />
      },
      {
        path: "/product/:id",
        element: <ProductDetailsPage />
      }
    ]
  }
])


export function ProductList() {

  const [products, setProduct] = useState([])
  const getAllProducts = async () => {
    const response = await axios.get("http://localhost:3001/products/")
    setProduct(response.data)
  }
  useEffect(() => {
    getAllProducts()
  }, [])
  AOS.init();
  return (

    <div className="container  w-full   mx-auto mt-28 justify-center flex flex-wrap gap-4">
      {products.map((product) => (
        <Link className='h-auto' to={`product/${product.id}`} ><div data-aos="fade-up"><ProductItem key={product.id} product={product} /></div> </Link>
      ))}
    </div>
  )
}