import React, { useState } from 'react';
import styled from 'styled-components';

const CommandListButton: React.FC = () => {
    const [showCommands, setShowCommands] = useState(false);

    const toggleCommands = () => setShowCommands(prev => !prev);

    return (
        <div>
            {/* Кнопка для отображения списка команд */}
            <StyledButton onClick={toggleCommands}>
                {showCommands ? 'Скрыть список команд' : 'Открыть список команд'}
            </StyledButton>

            {/* Список команд, который будет отображаться или скрываться */}
            {showCommands && (
                <CommandListContainer>
                    <CommandList>
                        <li><strong>Добавить в корзину товар (номер)</strong> - Добавить товар в корзину</li>
                        <li><strong>Удалить из корзины товар (номер)</strong> - Удалить товар из корзины</li>
                        <li><strong>Очистить корзину</strong> - Очистить корзину</li>
                        <li><strong>Перейти на главную</strong> - Переход на главную страницу</li>
                        <li><strong>Перейти в корзину</strong> - Переход в корзину</li>
                        <li>Если обработчик голоса перешел в режим <strong>Ожидание</strong> - перезагрузите страницу</li>
                        <li>Номер товара написан на карточке продукта</li>
                    </CommandList>
                </CommandListContainer>
            )}
        </div>
    );
};

// Кнопка для открытия и закрытия списка команд
const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #45a049;
  }
`;

// Контейнер для списка команд
const CommandListContainer = styled.div`
  margin-top: 20px;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Стили для списка команд
const CommandList = styled.ul`
  list-style-type: none;
  padding: 0;
  
  li {
    padding: 10px;
    font-size: 16px;
    color: #333;
    
    strong {
      color: #4CAF50;
    }
  }
`;

export default CommandListButton;
