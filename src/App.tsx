import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import MainScreen from "./components/MainScreen/MainScreen";
import StickyBanner from "./components/StickyBanner/StickyBanner";


function App() {
    return (
        <div className="App">
            <div className="bg-image-container"></div>
            <div className="wrapper">
                <div className="main-screen-container">
                    <Header></Header>
                    <MainScreen></MainScreen>
                </div>

                <Form></Form>
            </div>
            <StickyBanner></StickyBanner>
        </div>
    );
}

export default App;
