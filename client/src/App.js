import { CreateItem } from "./components/CreateItem/CreateItem";
import { Header } from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/items/create" element={<CreateItem />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
