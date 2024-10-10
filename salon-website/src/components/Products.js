import { useContext } from "react"
import { Link } from "react-router-dom"
import { ProductsContext } from "../contexts/ProductsContexts"
function Gallery() {
    const { products } = useContext(ProductsContext);
    console.log(products)
    return (
        <>
            <h1>Termékek</h1>
            <Link to={"/"}>Vissza a főoldalra</Link>
        </>
    )
}

export default Gallery