import { useState } from "react";
import Button from "./Button";
import { LOGIN_STATUS } from '../constants';

function Product({ product, addToCart, loginStatus }) {
    const [quantity, setQuantity] = useState(0);
    const { img, name, price, text, alt } = product;
    const [error, setError] = useState('');

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decrementQuantity = () => {
        setQuantity(Math.max(0, quantity - 1));
    }

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity < 1000 && newQuantity > 0) {
            setQuantity(newQuantity);
            setError('');
        } else if (newQuantity > 999) {
            setQuantity(newQuantity);
            setError("Please enter a number between 1 to 999.");
        } else {
            setQuantity(0);
        }
    }

    const totalCost = quantity * price;

    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart({ ...product, quantity, totalCost });
            setQuantity(0);
            setError('');
        }
    }

    return (
        <div className="product">
            <img className="product__img" src={img} alt={alt} />
            <div className="product__content">
                <h3 className="product__name">{name}</h3>
                <p className="product__text">{text}</p>
                <p className="product__prce">{`$${price} / bag`}</p>

                {loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && <p className="message">Please login to add to cart.</p>}

                {loginStatus === LOGIN_STATUS.IS_LOGGED_IN && <div className="buttons">
                    <div className="product__quantity__buttons">
                        <Button className="decrease__button" onClick={decrementQuantity} disabled={quantity === 0}>−</Button>

                        <input
                            className="quantity__input"
                            value={quantity}
                            onChange={handleQuantityChange}
                            aria-label={`Quantity for ${name}`}
                        />

                        <Button className="increase__button" onClick={incrementQuantity}>﹢</Button>
                    </div>
                    <p className="quantity__error">{error}</p>
                    <Button disabled={quantity === 0 || quantity > 999} className="add-to-cart__button" onClick={handleAddToCart}>
                        {quantity < 1000 && quantity > 0 ? ` ($${totalCost}) Add to Cart` : "Add to Cart"}
                    </Button>
                </div>}
            </div>
        </div>
    )
}

export default Product;