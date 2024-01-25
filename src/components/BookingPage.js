import RIA from './restaurant_inside_alternative.jpg';
import RI from './restaurant_inside.jpg';
import BookingForm from './BookingForm';



function BookingPage() {
    const ria = <img src={RIA} height={300} width={450} alt="Restaurant Inside Alternative" />
    const ri = <img src={RI} height={300} width={450} alt="Restaurant Inside" />
    
    return (
        <main id="bgc">
            <section id="spc">
            <article id="bookbg">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            </article>
            </section>
            <section id="spc">
                <article id="bc">
                    {ria}
                </article>
                <article id="bc">
                    {ri}
                </article>
            </section>
            <section id="spc">
                <article id="bc">
                    <BookingForm/>
                </article>
            </section>
        </main>
      )
}

export default BookingPage;
