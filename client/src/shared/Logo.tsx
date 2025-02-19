import { Link } from "react-router-dom";
import styled from "styled-components";

const Logotype = styled('h1')`
font-size: 24px;
font-weight: bold;
margin: 0;
`;

export default function Logo() {
    return (
        <Link to="/home">
            <Logotype>VoiceShop</Logotype>
        </Link>
    )
}
