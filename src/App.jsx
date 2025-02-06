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
                    productPrice="€400,-"
                />
                <ProductCard
                    productLabel="Best seller"
                    productImage={bagTwo}
                    productTitle="The stylish bag"
                    productPrice="€250,-"
                />
                <ProductCard
                    productLabel="New collection"
                    productImage={bagThree}
                    productTitle="The simple bag"
                    productPrice="€300,-"
                />
                <ProductCard
                    productLabel="New collection"
                    productImage={bagFour}
                    productTitle="The trendy bag"
                    productPrice="€150,-"
                />
            </main>
            <footer>
                <Tile
                    tileTitle="The brand"
                    tileDescription={["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eveniet " +
                    "excepturi itaque molestias officia provident quaerat sapiente sunt, temporibus voluptate. Amet " +
                    "autem cum neque nostrum officiis quibusdam recusandae similique sunt?"]}
                />
                <Tile
                    tileImage={brandImage}
                />
                <Tile
                    tileImage={storyImage}
                />
                <Tile
                    tileTitle="Our story"
                    tileDescription={["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eveniet " +
                    "excepturi itaque molestias officia provident quaerat sapiente sunt, temporibus voluptate.",
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eveniet excepturi " +
                        "itaque molestias officia provident quaerat sapiente sunt, temporibus voluptate."]}
                />
            </footer>
        </>
    )
}

export default App
