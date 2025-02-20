import { Routes, Route } from "react-router-dom";
import Layout from "../shared/Layout";
import Home from "../pages/Home";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="favourites" element={<></>} />
                    <Route path="cart" element={<></>} />
                </Route>
            </Routes>
        </>
    );
};

export default AppRoutes;