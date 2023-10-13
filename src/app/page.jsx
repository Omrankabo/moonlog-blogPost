import CardList from "@/components/CardList/CardList";
import CategoryList from "@/components/categorylist/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";

export default function Home() {
    return ( 
    <div >
        <Featured/>
        <CategoryList/>
        <div>
            <CardList/>
            <Menu/>
        </div>
    </div>
)}