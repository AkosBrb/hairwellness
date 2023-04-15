import { Link, useNavigate } from "react-router-dom"

function About() {
    const navigate = useNavigate()

    return (
        <>
            <h1>Rólunk</h1>
            <Link to={"/"}>Vissza a főoldalra</Link>
            <button onClick={() => navigate(-1)}>Vissza</button>
        </>
    )
}

export default About