"use client"
import styles from './themeToggle.module.css'
import {BsSun,BsMoon} from 'react-icons/bs'
import { useState } from 'react'

const ThemeToggle = () => {
  const [theme,toggle] = useState("light") 
  return (
    <div className={styles.container}>
      {
        theme === 'light'? <BsMoon/> : <BsSun/>
      }
    </div>
  )
}

export default ThemeToggle
