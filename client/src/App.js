import { CreateItem } from "./components/CreateItem/CreateItem";
import { Header } from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/items/create" element={<CreateItem />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
