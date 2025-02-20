import { useState, useEffect, useContext } from "react";
import { VoiceCommands } from "../../../types/enums";
import { Product } from "../../../types/interfaces";
import { products } from "../../../mocks/products";
import { ShopContext } from "./Layout";

const VoiceListener = () => {
    const [listening, setListening] = useState(false);

    const context = useContext(ShopContext);

    if (!context) {
        return <div>Ошибка: контекст не найден</div>;
    }

    const {setCart} = context;

    useEffect(() => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) return;

        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.lang = "ru-RU";

        let lastCommand: string | null = null;

        recognition.onstart = () => setListening(true);
        recognition.onend = () => {
            setListening(false);
            recognition.start();
        };

        recognition.onresult = (event) => {
            const transcript = event.results[event.results.length - 1][0].transcript.trim();

            if (transcript !== lastCommand) {
                lastCommand = transcript;
                handleCommand(transcript);

                setTimeout(() => {
                    lastCommand = null;
                }, 2000);
            }
        };

        recognition.start();

        return () => recognition.stop();
    }, []);

    // {ToDo}
    const handleCommand = (text: string) => {
        const addRegex = new RegExp(`${VoiceCommands.ADD} (\\d+)`, "i");
        const removeRegex = new RegExp(`${VoiceCommands.REMOVE} (\\d+)`, "i");
        const clearRegex = new RegExp(VoiceCommands.CLEAR, "i");

        if (addRegex.test(text)) {
            const productId = Number(text.match(/\d+/));

            const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
            const existingProduct = cart.find(product => product.id === productId);

            if (existingProduct) {
                existingProduct.quantity = (existingProduct.quantity || 1) + 1;
            } else {
                const productToAdd = products.find(product => product.id === productId);
                if (productToAdd) {
                    cart.push({ ...productToAdd, quantity: 1 });
                }
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            setCart(cart);
        } else if (removeRegex.test(text)) {
            const productId = Number(text.match(/\d+/));

            let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
            const productIndex = cart.findIndex(product => product.id === productId);

            if (productIndex !== -1) {
                if (cart[productIndex].quantity && cart[productIndex].quantity! > 1) {
                    cart[productIndex].quantity!--;
                } else {
                    cart.splice(productIndex, 1);
                }
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            setCart(cart);
        } else if (clearRegex.test(text)) {
            localStorage.removeItem('cart');
            setCart([]);
        }
    };

    return (
        <div>
            <p>{listening ? "🎤 Говорите..." : "🔴 Ожидание..."}</p>
        </div>
    );
};

export default VoiceListener;