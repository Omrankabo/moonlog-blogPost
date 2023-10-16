import React from 'react'
import styles from './cardlist.module.css'
import Pagination from '../pagination/Pagination'
import SingleItem from '../singleItem/SingleItem'



const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.cards}>
        <SingleItem/>
        <SingleItem/>
        <SingleItem/>
        <SingleItem/>
        <SingleItem/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList
