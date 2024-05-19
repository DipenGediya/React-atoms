import { Link } from "react-router-dom"
import { Button } from "./atoms/Atom"

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Fresh Market</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto ">
                            <li class="nav-item">
                                <Link to={"/"} class="nav-link" aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/About"} class="nav-link" href="#">About</Link>
                            </li>
                        </ul>
                        <Button content="contect us" property="btn primary-btn"/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar