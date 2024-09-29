import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import MainScreen from "./components/MainScreen/MainScreen";
import StickyBanner from "./components/StickyBanner/StickyBanner";


function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handlePageLoad = () => {
            setIsLoaded(true);
        };

        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            window.addEventListener("load", handlePageLoad);
        }

        window.addEventListener("load", handlePageLoad);

        return () => {
            window.removeEventListener("load", handlePageLoad);
        };
    });

    return (
        <div className="App">
            <div className="bg-image-container"></div>
            <div className="wrapper">
                <div className="main-screen-container">
                    <Header></Header>
                    <MainScreen pageIsLoaded={isLoaded}></MainScreen>
                </div>

                <Form></Form>
            </div>
            <StickyBanner pageIsLoaded={isLoaded}></StickyBanner>     
        </div>
    );
}

export default App;
