import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import fetchGallery from "../services/fetchPhotos"
function Gallery() {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetchGallery(setGallery);
    }, [])

    return (
        <section>
            <div className="title">
                <h2>Galéria</h2>
                <div className="underline"></div>
            </div>
            <div className="gallery-container">
                {gallery.map((imgUrl, i) => {
                    return <img key={i} alt="img" className="gallery-img" src={imgUrl} />
                })}
            </div>
            <Link to={"/"}>Vissza a főoldalra</Link>
        </section>
    )
}

export default Gallery