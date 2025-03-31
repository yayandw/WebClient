import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Contact from "./pages/contact.tsx"
import Home from "./pages/home.tsx";
import Layout from "./components/Layout.tsx";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<Home />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
