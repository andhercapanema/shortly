import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import { useCallback, useState } from "react";
import Contexts from "./common/contexts/Contexts";
import NavBar from "./components/NavBar/NavBar";
import ShortlyResources from "./common/services/ShortlyResources";

function App() {
    const storedUserToken = JSON.parse(localStorage.getItem("shortlyUser"));
    const [userToken, setUserToken] = useState(storedUserToken);
    const [userUrls, setUserUrls] = useState(null);

    const updateUsersUrls = useCallback(async () => {
        if (userToken !== null) {
            try {
                const res = await ShortlyResources.getUsersUrls(userToken);
                setUserUrls(res.data);
            } catch (err) {
                alert(err.response.data.message);
                console.error(err.response);
            }
        }
    }, [userToken]);

    /* async function updateUsersUrls() {
        try {
            console.log("atualizou!");
            const res = await ShortlyResources.getUsersUrls();
            setUserUrls(res.data);
        } catch (err) {
            alert(err.response.data.message);
            console.error(err.response);
        }
    } */

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Contexts
                userUrls={userUrls}
                setUserUrls={setUserUrls}
                userToken={userToken}
                setUserToken={setUserToken}
            >
                <NavBar updateUsersUrls={updateUsersUrls} />
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage updateUsersUrls={updateUsersUrls} />}
                    />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route
                        path="/signin"
                        element={
                            <SignInPage updateUsersUrls={updateUsersUrls} />
                        }
                    />
                </Routes>
            </Contexts>
        </BrowserRouter>
    );
}

export default App;
