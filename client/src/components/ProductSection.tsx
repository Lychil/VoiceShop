import React from "react";
import styled from "styled-components";

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "iPhone 14 Pro",
        price: "$999",
        image: "https://cdn.rbt.ru/images/gen/item_image/image/9728/24/972770_r9351.jpg"
    },
    {
        id: 2,
        name: "Sony WH-1000XM5",
        price: "$399",
        image: "https://krd.store123.ru/upload/iblock/cbc/s6zo9fg8mn1ivd92q1fsdg415fwf1qgm.jpeg"
    },
    {
        id: 3,
        name: "MacBook Air M2",
        price: "$1,199",
        image: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/MacBook_Air7035.jpeg"
    },
    {
        id: 4,
        name: "Apple Watch Ultra",
        price: "$799",
        image: "https://avatars.mds.yandex.net/i?id=e1e995b3cb44fc503e224517e573784f_l-5674505-images-thumbs&n=13"
    },
    {
        id: 5,
        name: "PlayStation 5",
        price: "$499",
        image: "https://cdn1.ozone.ru/s3/multimedia-0/c1000/6359965512.jpg"
    },
    {
        id: 6,
        name: "Canon EOS R5",
        price: "$3,899",
        image: "https://cdn1.ozone.ru/s3/multimedia-o/6269756808.jpg"
    }
];

// Стили для секции товаров
const Section = styled.section`
padding: 40px;
margin: auto;
`;

const Title = styled('h2')`
text-align: center;
font-size: 24px;
margin-bottom: 20px;
`;

const ProductGrid = styled('div')`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 20px;
`;

const ProductCard = styled('div')`
background: #fff;
padding: 15px;
border: 1px solid gray;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
text-align: center;
transition: transform 0.2s ease-in-out;

&:hover {
transform: translateY(-5px);
}
`;

const ProductImage = styled('img')`
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 10px;
`;

const ProductName = styled('h3')`
font-size: 18px;
margin: 10px 0;
`;

const ProductPrice = styled('p')`
font-size: 16px;
color: #ff6347;
font-weight: bold;
`;

const ProductSection: React.FC = () => {
    return (
        <Section>
            <Title>Наша продукция</Title>
            <ProductGrid>
                {products.map((product) => (
                    <ProductCard key={product.id}>
                        <ProductImage src={product.image} alt={product.name} />
                        <ProductName>{product.name}</ProductName>
                        <ProductPrice>{product.price}</ProductPrice>
                    </ProductCard>
                ))}
            </ProductGrid>
        </Section>
    );
};

export default ProductSection;
