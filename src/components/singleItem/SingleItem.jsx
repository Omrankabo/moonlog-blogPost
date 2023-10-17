import Image from 'next/image'
import React from 'react'
import styles from './singleItem.module.css';
import Link from 'next/link';

const SingleItem = () => {
  return (
    <div className={styles.container}> 
      {/* image container */}
      <div className={styles.imageContainer}>
        <Image src='/food.png' alt='' fill className={styles.image}/>
      </div>
      {/* text container */}
      <div className={styles.textContainer}>
        {/* info */}
        <div className={styles.info}>
          <span className={styles.date}>10.05.2023 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        {/* title */}
        <Link href={'/'}>
            <h1 className={styles.title}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
        </Link>
        {/* paragraph */}
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus id odio est iure sequi facere quae distinctio minima. Et doloribus similique mollitia! Iste rerum minima eaque. Quam, magnam itaque?
        </p>
        {/* button */}
        <button className={styles.button}>Read More</button>
      </div>
    </div>
  )
}

export default SingleItem
