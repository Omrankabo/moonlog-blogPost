import styles from './categoryItem.module.css'
import Link from "next/link";

const CategoryItem = ({name,backgroundColor})=>{
    return (
      <Link href={`/blog?cat=${name}`} className={styles.category} style={{backgroundColor:`${backgroundColor}`}}>{name}</Link>
    )
}

export default CategoryItem;