import { useEffect } from "react";
import { NavBar } from '../components/navbar/navbar.jsx';

export function ShopPage() {

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
        } 
        catch (error) {
            console.error("Fetch failed:", error);
        }
    };
    fetchData();
    }, [])
        
    return (
        <>
        <NavBar />
        </>
    )
}

export default ShopPage;