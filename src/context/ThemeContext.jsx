"use client"
import { createContext, useContext, useEffect, useState } from 'react'

const themeContext = createContext()


const getFromLocalStorage =() =>{
    if (window !== 'undefined') {
        const value = localStorage.getItem('theme');
        return value || ''
    }
}

const ThemeContext = ({children}) => {
    const [theme,setTheme] = useState(()=> getFromLocalStorage())
    const toggle = () => setTheme(
        theme === 'light'? "dark": "light"
    )
    useEffect(()=>{
        localStorage.setItem('theme',theme)
    },[theme])
  return (
    <themeContext.Provider value={{theme,toggle}}>
      {children}
    </themeContext.Provider>
  )
}

export const useTheme = ()=> useContext(themeContext)
export default ThemeContext
