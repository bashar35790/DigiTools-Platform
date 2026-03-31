import React from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/home-page/Hero'
import Statistic from './component/home-page/Statistic'

export default function App() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Statistic></Statistic>
    </main>
  )
}

