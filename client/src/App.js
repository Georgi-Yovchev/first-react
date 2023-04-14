import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateCar } from "./components/CreateCar/CreateCar";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { CatalogList } from "./components/CatalogList/CatalogList";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Header />

                <Routes>
                    <Route path="/cars/create" element={<CreateCar />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/cars/catalog" element={<CatalogList />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>

                <Footer />
            </AuthProvider>
        </Router>
    );
}

export default App;
