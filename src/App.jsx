import React, { Suspense } from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/home-page/Hero'
import Statistic from './component/home-page/Statistic'
import Products from './component/home-page/Products'
import Getstart from './component/home-page/Getstart'
import Pricing from './component/home-page/Pricing'
import Cta from './component/home-page/Cta'

const cardDataLoade = async () => {
  const res = await fetch("data.json");
  const data = await res.json();
  return data;
}

export default function App() {
  const cardDataPromise = cardDataLoade();
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Statistic></Statistic>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>
      }>
        <Products cardDataPromise={cardDataPromise}></Products>
      </Suspense>
      <Getstart></Getstart>
      <Pricing></Pricing>
      <Cta></Cta>
    </main>
  )
}
