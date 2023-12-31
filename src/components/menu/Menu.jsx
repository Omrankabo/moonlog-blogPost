import React from 'react'
import styles from './menu.module.css'
import MenuItem from '../menuItem/MenuItem'
import CategoryItem from '../categoryItem/CategoryItem'



const Menu = () => {
  return (
    <div className={styles.container}>
      
      {/* Popular */}
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuItem withImage={false}/>
      {/* categories */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div>
        <div className={styles.categories}>
          <CategoryItem path={"style"} backgroundColor={'#57cff431'}/>
          <CategoryItem path={"food"} backgroundColor={'#7fb88133'}/>
          <CategoryItem path={"fashion"} backgroundColor={'#da85c731'}/>
          <CategoryItem path={"culture"} backgroundColor={'#ffb04f45'}/>
          <CategoryItem path={"coding"} backgroundColor={'#5e4fff31'}/>
          <CategoryItem path={"travel"} backgroundColor={'#ffb0ff45'}/>
        </div>

      </div>
      {/* editor pics */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuItem withImage={true}/>
    </div>
  )
}

export default Menu
