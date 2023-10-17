import React from 'react'
import styles from './menuItem.module.css';
import Image from 'next/image';

const MenuItem = ({withImage}) => {
  return (
    <div className={styles.container}>
        {/* items */}
        <div className={styles.item}>
            {withImage && (
                <div className={styles.imageContainer}>
                    <Image src='/fashion.png' className={styles.image} alt='' fill/>
                </div>
            )}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.style}`}>style</span>
                <h3 className={styles.title} >Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <div className={styles.user}>
                    <span className={styles.username}>Omran Kabo</span>
                    <span className={styles.date}>10.05.2023</span>
                </div>
            </div>
        </div>
        {/* items */}
        <div className={styles.item}>
            {withImage && (
                <div className={styles.imageContainer}>
                    <Image src='/culture.png' alt='' className={styles.image} fill/>
                </div>
            )}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.culture}`}>culture</span>
                <h3 className={styles.title} >Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <div className={styles.user}>
                    <span className={styles.username}>Omran Kabo</span>
                    <span className={styles.date}>10.05.2023</span>
                </div>
            </div>
        </div>
        {/* items */}
        <div className={styles.item}>
            {withImage && (
                <div className={styles.imageContainer}>
                    <Image src='/travel.png' alt='' className={styles.image} fill/>
                </div>
            )}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.travel}`}>travel</span>
                <h3 className={styles.title} >Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <div className={styles.user}>
                    <span className={styles.username}>Omran Kabo </span>
                    <span className={styles.date}>10.05.2023</span>
                </div>
            </div>
        </div>
        {/* items */}
        <div className={styles.item}>
            {withImage && (
                <div className={styles.imageContainer}>
                    <Image src='/coding.png' alt='' className={styles.image} fill/>
                </div>
            )}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.coding}`}>coding</span>
                <h3 className={styles.title} >Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <div className={styles.user}>
                    <span className={styles.username}>Omran Kabo</span>
                    <span className={styles.date}>10.05.2023</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MenuItem
