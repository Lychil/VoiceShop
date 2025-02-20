import { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../common/components/shared/Layout";

// Стили контейнера
const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px;
`;

// Заголовок
const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
`;

// Грид карточек
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
`;

// Карточка товара
const Card = styled.div`
    background: white;
    border-radius: 10px;
    padding: 16px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// Изображение товара
const ProductImage = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
`;

// Название товара
const ProductName = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
`;

// Цена товара
const Price = styled.p`
    color: gray;
    font-size: 16px;
`;

// Контейнер кнопок
const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const Cart = () => {
    const context = useContext(ShopContext);

    if (!context) {
        return <div>Ошибка: контекст не найден</div>;
    }
    const { cart } = context;
    return (
        <Container>
            <Title>Корзина</Title>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <Grid>
                    {cart.map(item => (
                        <Card key={item.id}>
                            <ProductImage src={item.image} alt={item.name} />
                            <ProductName>{item.name}</ProductName>
                            <Price>{item.price}</Price>
                            <QuantityContainer>
                                <span>{item.quantity}</span>
                            </QuantityContainer>
                        </Card>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default Cart;
