import { useEffect, useState } from "react"
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
            <div className="photos-link-container">
                <a className="btn" href={"https://www.facebook.com/profile.php?id=61558684712346&sk=photos"} target="_blank" rel="noreferrer">További fényképek</a>
                <span>100+ fotó</span>
            </div>
        </section>
    )
}

export default Gallery