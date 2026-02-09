'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function AnimatedBorderButton() {
  const [clicked, setClicked] = useState(false)

  return (
    <button
      onClick={() => setClicked(!clicked)}
      className="relative px-6 py-3 font-semibold border-2 border-gray-400 rounded overflow-hidden"
    >
      <span className="relative z-10"></span>

  </button>
  );
}
