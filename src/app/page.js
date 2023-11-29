"use client"
import Card from '@/components/Card'
import {projects} from '../data'
import { useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

export default function Home() {
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  
useEffect(() => {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
},[])

  return (
    <main className='relative mt-[50vh]'>
      {
        projects.map((project, index) => {
          const targetScale = 1 - ((projects.length - index) * 0.05)
          return <Card key={index} i={index} {...project} progress={scrollYProgress} range={[index*0.25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}
