import React from "react";
import styled from "styled-components";
import { products } from "../../mocks/products";

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
                        <span>{product.id}</span>
                    </ProductCard>
                ))}
            </ProductGrid>
        </Section>
    );
};

export default ProductSection;
