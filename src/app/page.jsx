import CardList from "@/components/CardList/CardList";
import CategoryList from "@/components/categorylist/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import styles from './page.module.css'

export default function Home() {
    return ( 
    <div className={styles.container}>
        <Featured/>
        <CategoryList/>
        <div className={styles.content}>
            <CardList/>
            <Menu/>
        </div>
    </div>
)}