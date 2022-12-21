import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <h1>Shortly</h1>
        </BrowserRouter>
    );
}

export default App;
