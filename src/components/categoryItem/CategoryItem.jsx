import styles from './categoryItem.module.css'
import Link from "next/link";

const CategoryItem = ({path,backgroundColor})=>{
    return (
      <Link href={`/blog?cat=${path}`} className={styles.category} style={{backgroundColor:`${backgroundColor}`}}>{path}</Link>
    )
}

export default CategoryItem;