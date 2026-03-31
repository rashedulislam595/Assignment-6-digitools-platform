import './App.css'
import Benner from './components/benner_section/Benner'
import StatsSection from './components/stats_section/StatsSection'
import Navbar from './components/navbar/Navbar'
import StepsSection from './components/steps_section/StepsSection'
import { Suspense, useState } from 'react'
import Product from './components/product_container/Product'
import { ToastContainer } from 'react-toastify'
import PricingSection from './components/pricing_container/PricingSection'
import WorkflowSection from './components/workflow_section/WorkflowSection'
import Footer from './components/footer/Footer'

const productJson = async() =>{
    const res = await fetch("/products.json")
    return res.json();
  }
  const productPromise = productJson();

function App() {
  const [selectCart, setSelectCart] = useState([]);

  


  return (
    <>
      <Navbar selectCart={selectCart}/>
      <Benner/>
      <StatsSection/>
      {/* <Suspense fallback={<span className="loading loading-spinner loading-lg h-80 flex justify-center items-center mx-auto"></span>}> */}
        <Product productPromise={productPromise} selectCart={selectCart} setSelectCart={setSelectCart}/>
      {/* </Suspense> */}
      <StepsSection/>

      <PricingSection/>
      <WorkflowSection/>
      <Footer/>

    {/* react-toastify*/}
      <ToastContainer />
    </>
  )
}

export default App
