import { Link } from "react-router-dom";
import Specials from "./Specials";


function Main() {
    return (
        <main>
            <section>
                <article id="hero">
                <h1 className="heading-shadow">SPECIAL OFFER</h1>
                <p>
                    30% Off This Weekend 
                </p>
                <Link to="/booking-page" className="cta"> Reserve a Table </Link>
                </article>
            </section>
            <Specials/>
        </main>
      )
}

export default Main;

