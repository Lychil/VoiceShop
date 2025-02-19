import { Routes, Route } from "react-router-dom";
import Layout from "../shared/Layout";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="home" element={<></>} />
                    <Route path="favourites" element={<></>} />
                    <Route path="cart" element={<></>} />
                </Route>
            </Routes>
        </>
    );
};

export default AppRoutes;