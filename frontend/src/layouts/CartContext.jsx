import { createContext, useContext, useState, useEffect } from "react";
import { Toast, ToastContainer } from 'react-bootstrap'

const CartContext = createContext()

export function CartProvider({ children }) {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    // Initialize/update the cart
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cart")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    // Adds item to cart
    const addToCart = (item) => {
        setCart((prev) => {
            const exists = prev.find((i) => i.id === item.id) // i represents previously-added items
            if (exists) {
                return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
            }
            return [...prev, { ...item, quantity: 1 }]
        })
        setToastMessage(`${item.title} added to cart!`);
        setShowToast(true);
    }

    const increaseQty = (id) => {
        setCart((prev) =>
            prev.map((i) => i.id === id ? { ...i, quantity: i.quantity + 1 } : i)
        );
    }

    const decreaseQty = (id) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.id === id);
            if (existing.quantity === 1) {
            // Remove item from cart entirely
            return prev.filter((i) => i.id !== id);
            }
            // Otherwise decrement quantity
            return prev.map((i) => i.id === id ? { ...i, quantity: i.quantity - 1 } : i);
        });
    };

    const cartTotal = cart.reduce((sum, item) => {
        return sum + (item.regPrice * item.quantity);
    }, 0).toFixed(2);

    // Clears items in cart (for after checkout)
    const clearCart = () => {
        setCart([])
        localStorage.removeItem("cart")
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQty, decreaseQty, cartTotal, clearCart }}>
            {children}
            <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 9999 }}>
                <Toast
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    delay={3000}
                    autohide
                >
                <Toast.Header>
                    <strong className="me-auto">Cart</strong>
                </Toast.Header>
                <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </CartContext.Provider>
  );
}

export function useCart() {
    return useContext(CartContext)
}