"use client"
import styles from './themeToggle.module.css'
import {BsSun,BsMoon} from 'react-icons/bs'
import { useTheme } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const {theme,toggle} = useTheme()
  
  return (
    <div className={styles.container} onClick={toggle}>
      {
        theme === 'light'? <BsMoon/> : <BsSun/>
      }
    </div>
  )
}

export default ThemeToggle
