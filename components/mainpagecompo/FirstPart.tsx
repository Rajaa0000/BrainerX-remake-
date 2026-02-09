'use client'

import Image from "next/image"
import Link from "next/link"
import styles from './FirstPart.module.css'
import { useState, useEffect } from "react"

function FirstPart() {
  const [size, setSize] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth)

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center md:flex-row relative">
      
        <Image
          src='/images/mainbgs/2.png'
          alt='this is a background image'
          width={300}
          height={100}
          className='absolute z-[-10] right-[-1rem]'
        />
      {size > 900 && (

      <Image
        src='/images/mainbgs/1.png'
        width={300}
        height={100}
        alt='a background image'
        className='absolute z-[-10] left-[-2rem]'
      />
      )}
      <Image
        className={styles.floatingPhone}
        src='/images/mainPageimages/floatingPhone.png'
        alt='floating phone'
        width={300}
        height={100}
        quality={100}
      />

      <div className={styles.firstsectiontext}>
        <h1>Learn, without limits - BrainerX.</h1>
        <p>
          BrainerX offers quality content and a unique approach to help you master practical skills effortlessly
        </p>
        <div className="flex justify-center items-center rounded bg-white border-2 border-[#252c4b] px-4 py-2 font-[600] hover:text-white hover:bg-[#252c4b]">
          <Link href='/courses?topic=Divertissement' className="block">
            Discover our courses
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FirstPart
