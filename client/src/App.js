import { AuthProvider } from "./contexts/AuthContext";
import { CarProvider } from "./contexts/CarContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateCar } from "./components/CreateCar/CreateCar";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { CarDetails } from "./components/CarDetails/CarDetails";
import { Logout } from "./components/Logout/Logout";
import { EditCar } from "./components/EditCar/EditCar";
import { Catalog } from "./components/Catalog/Catalog";
import { Favourites } from "./components/Favourites/Favourites";

function App() {
    return (
        <Router>
            <AuthProvider>
                <CarProvider>
                    <Header />

                    <Routes>
                        <Route path="/cars/create" element={<CreateCar />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/cars/catalog" element={<Catalog />} />
                        <Route path="/favourites" element={<Favourites />} />
                        <Route
                            path="/catalog/:carId"
                            element={<CarDetails />}
                        />
                        <Route
                            path="/catalog/:carId/edit"
                            element={<EditCar />}
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>

                    <Footer />
                </CarProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;
