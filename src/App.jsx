import './App.css'
import Button from "./components/Button.jsx";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button disabledButton={false} titleButton="to the collection" />
                <Button disabledButton={false} titleButton="shop all bags"/>
                <Button disabledButton={true} titleButton="pre-orders"/>
            </nav>
        </>
    )
}

export default App
