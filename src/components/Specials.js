import Bruschetta from './Bruschetta.jpg';
import Greek from './Greek_salad.jpg';
import Lemon from './Lemon_dessert.jpg';
import { Link } from "react-router-dom";


function Specials() {
    const Bru = <img src={Bruschetta} height={200} width={300} alt="Bruschetta" />
    const Gre = <img src={Greek} height={200} width={300} alt="Greek salad" />
    const Lem = <img src={Lemon} height={200} width={300} alt="Lemon dessert" />

    return (
        <main>
            <section id="spc">
                <article id="rj">
                <h1>Specials</h1>
                </article>
                <article id="rj">
                <p>
                    <Link to="/order-online" className="cta2">Online Menu</Link>
                </p>
                </article>
            </section>
            <section id="spc">
                <article>
                <h2>Greek Salad</h2>
                <p id="price"><label>$12.99</label></p>
                {Gre}
                <p>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                </p>
                 </article>
                <article>
                <h2>Bruschetta</h2>
                <p id="price"><label>$5.99</label></p>
                {Bru}
                <p>
                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
                </p>
                 </article>
                <article>
                <h2>Lemon Dessert</h2>
                <p id="price"><label>$5.00</label></p>
                {Lem}
                <p>
                This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. 
                </p>
                </article>
            </section>
        </main>

        )
}

export default Specials;
