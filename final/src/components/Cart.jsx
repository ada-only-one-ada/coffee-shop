import Button from "./Button";
import { LOGIN_STATUS } from '../constants';

function Cart({ cart, totalCost, onRemove, onIncrease, onDecrease, loginStatus, setPage }) {
    const cartItems = Object.values(cart)

    return (
        <div className="cart">
            {loginStatus === LOGIN_STATUS.IS_LOGGED_IN && cartItems.length > 0 && <Button className="remove__button" onClick={onRemove}>remove all</Button>}
            <h2>Order Cart</h2>
            <br></br>
            {loginStatus === LOGIN_STATUS.IS_LOGGED_IN && cartItems.length > 0 ? (
                <>
                    <ul className="cart__list">
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <div className="product__quantity__buttons">
                                    <Button className="decrease__button" onClick={() => onDecrease(item.id)}>−</Button>
                                    <div className="quantity__container">{item.quantity}</div>
                                    <Button className="increase__button" onClick={() => onIncrease(item.id)}>+</Button>
                                    {item.name} - ${item.totalCost.toFixed(2)}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="split">_____________________</p>
                    <br></br>
                    <p className="total__price">Total: ${totalCost.toFixed(2)}</p>
                    <br></br>
                    <Button className="checkout__button" onClick={() => setPage("Checkout")}>Checkout</Button>
                </>) :
                (loginStatus === LOGIN_STATUS.IS_LOGGED_IN && <p>Your cart is empty.</p>)}
            {loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && <p>Please login to view your cart.</p>}
        </div>
    );
}
export default Cart;