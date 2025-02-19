import styled from "styled-components"
import { Outlet } from "react-router-dom";
import { Container } from "../styles/styles";
import Header from "./Header";

const Wrapper = styled('div')`
margin: 0 20px;
display: flex;
flex-direction: column;
row-gap: 20px;
`;

export default function Layout() {
    return (
        <Container>
            <Wrapper>
                <Header />
                <main>
                    <Outlet />
                </main>
            </Wrapper>
        </Container>
    )
}
