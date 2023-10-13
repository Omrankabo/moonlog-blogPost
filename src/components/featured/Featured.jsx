import Image from 'next/image'
import styles from './featured.module.css'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey, Moonlogs is here!</b> discover our new stories and tricks in web dev</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='' className={styles.img} fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>How to start learning to code.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugit voluptatum corrupti debitis dolor enim amet quidem repudiandae? Enim neque animi exercitationem accusantium reiciendis magnam minima modi tempora distinctio harum!
          </p>
          <button className={styles.button}>Read More</button>
        </div>

      </div>
    </div>
  )
}

export default Featured
