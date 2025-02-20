import { useContext } from "react"
import { Link } from "react-router-dom"
import { GalleryContext } from "../contexts/GalleryContext"
function Gallery() {
    const { gallery } = useContext(GalleryContext);
    console.log(gallery)
    return (
        <>
            <h1>Galéria</h1>
            <div className="gallery-container">
                {gallery.map((imgUrl, i) => {
                    return <img key={i} alt="img" className="gallery-img" src={imgUrl} />
                })}
            </div>
            <Link to={"/"}>Vissza a főoldalra</Link>
        </>
    )
}

export default Gallery