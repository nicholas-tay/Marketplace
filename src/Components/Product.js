import css from "./Products.css";
import Card from "./Card.js";
import WBCC from "../wbcc.png";

function Products(props) {

    return (
        <div>
            <main>
                <section className="cards">

                    <Card name="test" imageURL={WBCC} description="asdf adsf asdf asdf safd asfd asfd" />

                    <Card name="Item2" imageURL={WBCC} description="asdf adsf asdf asdf safd asfd asfd" />

                </section>

            </main>

        </div>


    );



}

export default Products;