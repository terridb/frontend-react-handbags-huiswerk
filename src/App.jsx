import './App.css'
import Button from "./components/Button.jsx";
import bagOne from "./assets/bag_1.png";
import bagTwo from "./assets/bag_2.png";
import bagThree from "./assets/bag_3.png";
import bagFour from "./assets/bag_4.png";
import ProductCard from "./components/ProductCard.jsx";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button disabledButton={false} titleButton="to the collection" />
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
                    productPrice="300,-"
                />
                <ProductCard
                    productLabel="New collection"
                    productImage={bagFour}
                    productTitle="The trendy bag"
                    productPrice="150,-"
                />
            </main>
        </>
    )
}

export default App
