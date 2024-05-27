import React, { createContext, useEffect, useRef, useState } from "react";
import User from "./userApi";
import ProductAPI from "./productApis";
import CartApi from "./CartApi";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("safaToken"));
    const [user, setUser] = useState({});

    const [products, setProducts] = useState([]);

    const [total, setTotal] = useState({
        amount: 0,
        tax: 0,
        total: 0,
        discount: 0
    });

    const calculateAmount = (carts) => {
        if (carts.length > 0) {
            let amount = carts.map((item) => {
                return item.rate * item.quantity;
            });
            amount = amount.reduce((acc, item) => item + acc);
            const tax = parseFloat((amount * 0.05).toFixed(2));
            const delivery = 10;
            const discount = parseFloat((amount * 0.015).toFixed(2));
            const total = parseFloat((amount + tax + delivery - discount).toFixed(2));
            return {
                amount, tax, total, discount
            }
        }
    }


    const [carts, setCarts] = useState([]);
    const [orders, setOrders] = useState(() => {
        const localStorageOrder = localStorage.getItem("safaOrder");
        return JSON.parse(localStorageOrder) || [];
    })

    const UserContext = User

    const addToCart = (id) => {
        if (id) {
            const cartToAdd = carts.find(c => c._id === id);
            if (!cartToAdd) {
                setCarts((prevCart) => [...prevCart, product]);
            }
        }
    }

    const removeFromCart = (product) => {
        if (product) {
            const cartToRemove = carts.find(c => c.id === product.id);
            if (cartToRemove) {
                setCarts((prevCart) => prevCart.filter(cart => cart.id !== cartToRemove.id));
            }
        }
    }

    const toast = useRef(null);
    const showToast = (severity, summary, detail) => {
        toast.current.show({ severity, summary, detail });
    };

    useEffect(() => {
        ProductAPI.getAll()
            .then((response) => {
                setProducts(response.data);
            })
            .catch((err) => {
                console.error('Failed to fetch products:', err);
            });
    }, []);

    useEffect(() => {
        setTotal(calculateAmount(carts));
    }, [carts, setTotal]);

    useEffect(() => {
        CartApi.getCart(token).then((res) => {
            console.log(res.data);
            setCarts(res.data);
        }).catch((err) => { console.error(err) });
    }, []);

    useEffect(() => {
        localStorage.removeItem("safaOrder");
        localStorage.setItem("safaOrder", JSON.stringify(orders));
    }, [orders]);

    useEffect(() => {
        if (token) {
            User.getUser(token).then((user) => {
                setUser(user.data);
            }).catch((error) => console.error(error));
        }
    }, [token])

    return (
        <ProductContext.Provider value={{
            products,
            setProducts,
            carts,
            setCarts,
            orders,
            setOrders,
            addToCart,
            removeFromCart,
            total,
            setTotal,
            showToast,
            toast,
            UserContext,
            token,
            setToken,
            user,
            ProductAPI
        }}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };