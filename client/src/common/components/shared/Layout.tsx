import styled from "styled-components"
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "../../styles/styles";
import VoiceListener from "./VoiceListener";
import { createContext, useEffect, useState } from "react";
import { Product } from "../../../types/interfaces";

const Wrapper = styled('div')`
margin: 0 20px;
display: flex;
flex-direction: column;
row-gap: 20px;
`;

export interface ShopContextProps {
    cart: Product[];
    setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}


export const ShopContext = createContext<ShopContextProps | undefined>(undefined);

export default function Layout() {
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
    }, []);

    return (
        <ShopContext.Provider value={{cart, setCart}}>
            <Container>
                <Wrapper>
                    <Header />
                    <VoiceListener />
                    <main>
                        <Outlet />
                    </main>
                </Wrapper>
            </Container>
        </ShopContext.Provider>
    )
}
