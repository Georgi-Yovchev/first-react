import { AuthProvider } from "./contexts/AuthContext";
import { CarProvider } from "./contexts/CarContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateCar } from "./components/CreateCar/CreateCar";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { CatalogList } from "./components/CatalogList/CatalogList";
import { CarDetails } from "./components/CarDetails/CarDetails";

function App() {
    return (
        <Router>
            <AuthProvider>
                <CarProvider>
                    <Header />

                    <Routes>
                        <Route path="/cars/create" element={<CreateCar />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/cars/catalog" element={<CatalogList />} />
                        <Route
                            path="/catalog/:carId"
                            element={<CarDetails />}
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>

                    <Footer />
                </CarProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;
