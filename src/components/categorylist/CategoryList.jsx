import React from 'react'
import styles from './categorylist.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Poplur Categories</h1>
      <div className={styles.categories}>
        <Link href={'cat?=style'} className={`${styles.category} ${styles.style}`}>
          <Image src={'/style.png'} width={32} height={32} alt='' className={styles.image} />
          Style
        </Link> 
        <Link href={'cat?=fashion'} className={`${styles.category} ${styles.fashion}`}>
        <Image src={'/fashion.png'} width={32} height={32} alt='' className={styles.image} />
          fashion
        </Link>
        <Link href={'cat?=food'} className={`${styles.category} ${styles.food}`}>
        <Image src={'/coding.png'} width={32} height={32} alt='' className={styles.image} />
          food
        </Link>
        <Link href={'cat?=coding'} className={`${styles.category} ${styles.coding}`}>
        <Image src={'/coding.png'} width={32} height={32} alt='' className={styles.image} />
          coding
        </Link>
        <Link href={'cat?=travel'} className={`${styles.category} ${styles.travel}`}>
        <Image src={'/coding.png'} width={32} height={32} alt='' className={styles.image} />
          travel
        </Link>
        <Link href={'cat?=culture'} className={`${styles.category} ${styles.culture}`}>
        <Image src={'/coding.png'} width={32} height={32} alt='' className={styles.image} />
          culture
        </Link>
      </div>
    </div>
  )
}

export default CategoryList
