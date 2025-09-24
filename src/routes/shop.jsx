import { useEffect, useState } from "react";
import Card from "../components/card/card.jsx";

export function ShopPage() {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setItems(data);
                console.log(data);
            } 
            catch (error) {
                console.error("Fetch failed:", error);
            }
        };
    fetchData();
    }, [])
        
    return (
        <div className="shop-container">
            <div className="shop-grid">
                {items.map(item =>
                    <Card item={item} key={item.id}/>)}
            </div>
        </div>
    )
}

export default ShopPage;