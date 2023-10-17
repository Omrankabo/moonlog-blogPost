"use client"
import styles from './navbar.module.css'
import {FaBars} from 'react-icons/fa'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import Link from 'next/link'
import { useState } from 'react'
import AuthLink from '../authLink/AuthLink'

const Navbar = () => {
    const [open,setOpen] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.logo}>MoonLogs</div>
      <div className={styles.links}>
        <div className={styles.desktop}>
            <div className={styles.theme}>
            <ThemeToggle/>
            </div>
            <Link href='/'>Homepage</Link>
            <Link href='/'>about</Link>
            <Link href='/'>Contact</Link>
            <AuthLink/>
        </div>
        <FaBars className={styles.burger} onClick={()=>setOpen(!open)}/>
        {
            open && (
                <div className={styles.mobile}>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>about</Link>
                    <Link href='/'>Contact</Link>
                    <AuthLink/>
                    <ThemeToggle/>
                </div>
            )
        }
      </div>
    </div>
  )
}

export default Navbar
