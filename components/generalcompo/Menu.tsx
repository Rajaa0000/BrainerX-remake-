'use client'

import styles from './Menu.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from 'react'
import Link from "next/link"
import {motion,AnimatePresence, easeInOut} from "framer-motion"

function Menu() {
  const [menuOpened, setMenuOpened] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  const list = ['Home','Courses','Features','Team','Screens']

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900)
    }

    // Set initial value
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const ul = list.map((item, index) => (
    <Link 
      href={list[index] !== 'Courses' ? `/#${item}` : '/courses?topic=Divertissement'} 
      className='hover:underline'
      key={index} 
      onClick={() => setMenuOpened(false)}
      
    >
      {item}
    </Link>
  ))

return (
  <>
    {/* MOBILE */}
    {isMobile && (
      <>
        {/* Burger icon (NOT animated) */}
        {!menuOpened && (
          <FontAwesomeIcon
            icon={faBars}
            className={styles.icon}
            onClick={() => setMenuOpened(true)}
          />
        )}

        {/* Animated menu */}
        <AnimatePresence>
          {menuOpened && (
            <motion.div
              key="mobile-menu"
              className={styles.menuList}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <FontAwesomeIcon
                icon={faXmark}
                className={styles.iconn}
                onClick={() => setMenuOpened(false)}
              />

              <ul>{ul}</ul>

              <div className={styles.informationDiv}>
                <p className={styles.infoDiv}>
                  We are always happy to help and provide support to our valued Brainers!
                </p>
                <div>
                  <p className={styles.contact}>support@brainerx.com</p>
                  <p className={styles.contact}>0550 270 888</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )}

    {/* DESKTOP */}
    {!isMobile && (
      <div className="flex gap-[1rem] px-[1rem] font-[600] text-[1rem]">
        {ul}
      </div>
    )}
  </>
)
}

export default Menu
