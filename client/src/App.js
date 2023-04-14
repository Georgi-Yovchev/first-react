import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateCar } from "./components/CreateCar/CreateCar";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Register } from "./components/Register/Register";

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/cars/create" element={<CreateCar />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
