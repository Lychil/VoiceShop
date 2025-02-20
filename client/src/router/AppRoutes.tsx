import { Routes, Route } from "react-router-dom";
import Layout from "../common/components/shared/Layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="favourites" element={<></>} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
        </>
    );
};

export default AppRoutes;