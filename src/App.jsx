import './App.css'
import Button from "./components/Button.jsx";
import bagOne from "./assets/bag_1.png";
import bagTwo from "./assets/bag_2.png";
import bagThree from "./assets/bag_3.png";
import bagFour from "./assets/bag_4.png";
import brandImage from "./assets/brand.png";
import storyImage from "./assets/our_story.png";
import ProductCard from "./components/ProductCard.jsx";
import Tile from "./components/Tile.jsx";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button disabledButton={false} titleButton="to the collection"/>
                <Button disabledButton={false} titleButton="shop all bags"/>
                <Button disabledButton={true} titleButton="pre-orders"/>
            </nav>
            <main>
                <ProductCard
                    productLabel="Best seller"
                    productImage={bagOne}
                    productTitle="The handy bag"
                    productPrice="400"
                />
                <ProductCard
                    productLabel="Best seller"
                    productImage={bagTwo}
                    productTitle="The stylish bag"
                    productPrice="250"
                />
                <ProductCard
                    productLabel="New collection"
                    productImage={bagThree}
                    productTitle="The simple bag"
                    productPrice="300"
                />
                <ProductCard
                    productLabel="New collection"
                    productImage={bagFour}
                    productTitle="The trendy bag"
                    productPrice="150"
                />
            </main>
            <footer>
                <Tile tileTitle="The brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti expedita itaque
                        numquam officia optio perspiciatis porro! Aliquid at, autem corporis dignissimos dolor eveniet
                        fugiat modi natus nesciunt nostrum quidem ratione sint soluta tenetur ullam.</p>
                </Tile>
                <Tile tileImage={brandImage}/>
                <Tile tileImage={storyImage}/>
                <Tile tileTitle="Our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque culpa ducimus,
                        eaque eos expedita id ipsa mollitia nam officia omnis placeat, quam quia quibusdam quo totam
                        ullam vel, voluptates!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum eaque error facilis
                        ipsum magnam quibusdam quidem tempora velit vero.</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
