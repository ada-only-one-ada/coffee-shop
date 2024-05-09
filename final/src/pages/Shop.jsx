import primoPassoImg from '/primo-passo.jpg';
import cameroonImg from '/cameroon.jpg';
import cultivateImg from '/cultivate.jpg';
import krankImg from '/krank.jpg';
import lawBreakersImg from '/law-breakers.jpg';
import raeesBlendImg from '/raees-blend.jpg';
import frenchTruckImg from '/french-truck.jpg';

import '../css/Shop.css';
import Product from '../components/Product';
import Cart from '../components/Cart';
import { useEffect, useState } from 'react';

const products = [
    {
        id: "0",
        name: "Primo Passo",
        price: 25,
        img: primoPassoImg,
        text: "A classic blend with floral notes and a sweet, balanced finish",
        alt: "Primo Passo",
    },
    {
        id: "1",
        name: "Cameroon Mount Oku",
        price: 18,
        img: cameroonImg,
        text: "Single-origin beans offering a robust flavor with hints of oak and dark chocolate.",
        alt: "Cameroon Mount Oku",
    },
    {
        id: "2",
        name: "Cultivate",
        price: 20,
        img: cultivateImg,
        text: "Rich and smooth, ideal for espresso lovers seeking depth and complexity.",
        alt: "Cultivate",
    },
    {
        id: "3",
        name: "Krank",
        price: 23,
        img: krankImg,
        text: "Energetic and potent, designed to kick start your day with a spicy aroma.",
        alt: "Krank",
    },
    {
        id: "4",
        name: "Law Breakers",
        price: 30,
        img: lawBreakersImg,
        text: "Bold and assertive, with a heavy body and layers of caramel and citrus.",
        alt: "Law Breakers",
    },
    {
        id: "5",
        name: "Raees Blend",
        price: 30,
        img: raeesBlendImg,
        text: "A luxurious blend of the finest beans, with notes of vanilla and almond.",
        alt: "Raees Blend",
    },
    {
        id: "6",
        name: "French Truck",
        price: 15,
        img: frenchTruckImg,
        text: "Lightly roasted with a mellow acidity and a hint of sweetness from the French Riviera.",
        alt: "French Truck",
    },
]

const Shop = ({ loginStatus, onRemove, onIncrease, onDecrease, addToCart, cart, totalCost, setPage }) => {
    const [direction, setDirection] = useState('Featured');
    const [sortedProducts, setSortedProducts] = useState(products);
    useEffect(() => {
        switch (direction) {
            case 'LowToHigh':
                setSortedProducts([...products].sort((a, b) => a.price - b.price));
                break;
            case 'HighToLow':
                setSortedProducts([...products].sort((a, b) => b.price - a.price));
                break;
            case 'Featured':
                setSortedProducts(products);
                break;
            default:
                setSortedProducts(products);
                break;
        }
    }, [direction]);

    const onSort = (event) => {
        setDirection(event.target.value);
    }

    return (
        <div className='shop'>
            <select className="sort__options" onChange={onSort} value={direction} aria-label="Sort products by order">
                <option value="Featured">Sort By: Featured</option>
                <option value="LowToHigh">Sort By: Price: Low to High</option>
                <option value="HighToLow">Sort By: Price: High to Low</option>
            </select>
            <div className='cards'>
                <div className='products'>
                    {
                        sortedProducts.map((product) => (
                            <Product
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                                loginStatus={loginStatus}
                            />
                        ))
                    }
                </div>
                <Cart cart={cart} totalCost={totalCost} onIncrease={onIncrease} onDecrease={onDecrease} onRemove={onRemove} loginStatus={loginStatus} setPage={setPage} />
            </div>
        </div>
    )
}

export default Shop;


