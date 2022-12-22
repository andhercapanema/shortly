import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import { useState } from "react";
import Contexts from "./common/contexts/Contexts";
import NavBar from "./components/NavBar/NavBar";

function App() {
    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Contexts user={user} setUser={setUser}>
                <NavBar />
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/signin" element={<SignInPage />} />
                </Routes>
            </Contexts>
        </BrowserRouter>
    );
}

export default App;
