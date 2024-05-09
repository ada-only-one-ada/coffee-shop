import '../css/Checkout.css';
import CheckoutForm from '../components/CheckoutForm';
import { useState } from 'react';

function Checkout({ cart, totalCost, onRemove }) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const onConfirm = (event) => {
        setIsConfirmed(true);
    }

    const cartItems = Object.values(cart);
    return (
        <div className='checkout'>
            <div className='checkout__items'>
                <h2 className='summary__title'>Your Order</h2>
                {isConfirmed && <p className='clear__cart'>🎉Your order has been confirmed!🎉</p>}
                <ul className="checkout__list">
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} ({item.quantity}) - ${item.totalCost.toFixed(2)}
                        </li>
                    ))}
                </ul>
                {!isConfirmed && <p className="checkout__total">Total: ${totalCost.toFixed(2)}</p>}
            </div>

            <CheckoutForm onConfirm={onConfirm} onRemove={onRemove} />

        </div>
    );
}

export default Checkout;

