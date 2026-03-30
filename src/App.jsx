
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Navbar/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Navbar/Products/Products'
import Rating from './components/Navbar/Rating/Rating'
import Footer from './components/Footer/Footer'
import TransparentPricing from './components/TransparentPricing'


const fetchProducts = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  const productsPromise = fetchProducts();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Rating></Rating>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>} ><Products productsPromise={productsPromise}></Products></Suspense>
      <TransparentPricing></TransparentPricing>
      <Footer></Footer>
    </>
  )
}

export default App
