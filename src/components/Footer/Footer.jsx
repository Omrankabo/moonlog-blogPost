import React from 'react'
import styles from './footer.module.css'
import {FaFacebook,FaWhatsapp,FaYoutube,FaInstagram,FaBars} from 'react-icons/fa'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>Moonlog</div>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat voluptas ea quo porro fugit, obcaecati quisquam consequuntur, excepturi quia perferendis at veritatis molestias incidunt doloribus iure magnam, laudantium modi.
        </p>
        <div className={styles.socialButtons}>
        <FaFacebook/>
        <FaWhatsapp/>
        <FaInstagram/>
        <FaYoutube/> 
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h3 className={styles.title}>Links</h3>
          <Link href={'/'} className={styles.link}>Homepage</Link>
          <Link href={'/'} className={styles.link}>Blog</Link>
          <Link href={'/'} className={styles.link}>About</Link>
          <Link href={'/'} className={styles.link}>Contact</Link>
        </div>
        <div className={styles.item}>
          <h3 className={styles.title}>Tags</h3>
          <Link href={'/'} className={styles.link}>Style</Link>
          <Link href={'/'} className={styles.link}>Fashion</Link>
          <Link href={'/'} className={styles.link}>Coding</Link>
          <Link href={'/'} className={styles.link}>Contact</Link>
        </div>
        <div className={styles.item}>
          <h3 className={styles.title}>Social</h3>
          <Link href={'/'} className={styles.link}>Facebook</Link>
          <Link href={'/'} className={styles.link}>Instagram</Link>
          <Link href={'/'} className={styles.link}>Youtube
          </Link>
          <Link href={'/'} className={styles.link}>Tiktok</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
