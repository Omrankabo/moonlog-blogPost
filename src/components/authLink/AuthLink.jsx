import React from 'react'
import styles from './authlink.module.css'
import Link from 'next/link'

const AuthLink = () => {
  const state = 'false'
  return (
    <div className={styles.container}>
      {
        state === 'not' ? (
          <Link href='/login'>Login</Link>
          ):(
            <>
              <Link href='/write'>Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )
      }
    </div>
  )
}

export default AuthLink
