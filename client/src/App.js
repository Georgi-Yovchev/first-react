import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateCar } from "./components/CreateCar/CreateCar";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Register } from "./components/Register/Register";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />

                <Routes>
                    <Route path="/cars/create" element={<CreateCar />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                </Routes>

                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
