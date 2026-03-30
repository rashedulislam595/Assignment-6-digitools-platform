import './App.css'
import Benner from './components/benner_section/Benner'
import StatsSection from './components/stats_section/StatsSection'
import Navbar from './components/navbar/Navbar'
import StepsSection from './components/steps_section/StepsSection'
import { Suspense } from 'react'
import Product from './components/product_container/Product'

function App() {
  const productJson = async() =>{
    const res = await fetch("/products.json")
    return res.json();
  }
  const productPromise = productJson();


  return (
    <>
      <Navbar/>
      <Benner/>
      <StatsSection/>
      <Suspense fallback={"loading..."}>
        <Product productPromise={productPromise}/>
      </Suspense>
      <StepsSection/>
    </>
  )
}

export default App
