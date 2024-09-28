import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import MainScreen from "./components/MainScreen/MainScreen";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="main-screen-container">
                    <Header></Header>
                    <MainScreen></MainScreen>
                </div>

                <Form></Form>
            </div>
        </div>
    );
}

export default App;
