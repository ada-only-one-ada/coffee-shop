import { useState } from 'react';
import Button from '../components/Button';

function CheckoutForm({ onConfirm, onRemove }) {
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [confirmEmailError, setConfirmEmailError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [billingAddressError, setBillingAddressError] = useState('');
    const [cardError, setCardError] = useState('');

    const [isSameAddress, setIsSameAddress] = useState(false);


    const handleCheckboxChange = (event) => {
        setIsSameAddress(event.target.checked);
        setBillingAddress(event.target.checked ? address : '');
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
        if (isSameAddress) {
            setBillingAddress(event.target.value);
        }
    };

    const handleBillingAddressChange = (event) => {
        if (!isSameAddress) {
            setBillingAddress(event.target.value);
        }
    };

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [address, setAddress] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [card, setCard] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setNameError('');
        setPhoneError('');
        setEmailError('');
        setConfirmEmailError('');
        setAddressError('');
        setBillingAddressError('');
        setCardError('');

        let hasError = false;

        if (!event.target.name.value.trim()) {
            setNameError('Name is required');
            hasError = true;
        }

        if (!event.target.phone.value.trim()) {
            setPhoneError('Phone is required');
            hasError = true;
        } else if (!/^\d+$/.test(event.target.phone.value)) {
            setPhoneError('Phone must contain only digits');
            hasError = true;
        }

        if (!event.target.email.value.trim()) {
            setEmailError('Email is required');
            hasError = true;
        }

        if (!event.target['confirm-email'].value.trim()) {
            setConfirmEmailError('Confirm email is required');
            hasError = true;
        } else if (event.target.email.value.trim() !== event.target['confirm-email'].value.trim()) {
            setConfirmEmailError('Email addresses must match');
            hasError = true;
        }

        if (!event.target.address.value.trim()) {
            setAddressError('Address is required');
            hasError = true;
        }

        if (!event.target['billing-address'].value.trim() && !isSameAddress) {
            setBillingAddressError('Billing address is required');
            hasError = true;
        }

        if (!event.target.card.value.trim()) {
            setCardError('Card number is required');
            hasError = true;
        } else if (!/^\d+$/.test(event.target.card.value)) {
            setCardError('Card must contain only digits');
            hasError = true;
        }

        if (!hasError) {
            onConfirm();
            onRemove();

            setName('');
            setPhone('');
            setEmail('');
            setConfirmEmail('');
            setAddress('');
            setBillingAddress('');
            setCard('');
            setIsSameAddress(false);
        }
    };

    return (
        <form className="submit" onSubmit={handleSubmit}>
            <h2 className="submit__title">Your details</h2>
            <span className="req__title">* - required</span>
            <div className="name">
                <label className="submit__label" htmlFor="name">Name<span className="req">*</span></label>

                <div>
                    <input className="name__input" name="name" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <div className="name__error">{nameError}</div>
                </div>
            </div>

            <div className="phone">
                <label className="submit__label" htmlFor="phone">Phone <span className="req">*</span></label>
                <div>
                    <input className="phone__input" name="phone" id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <div className="phone__error">{phoneError}</div>
                </div>
            </div>

            <div className="email">
                <label className="submit__label" htmlFor="email">Email<span className="req">*</span></label>
                <div>
                    <input className="email__input" name="email" id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="email__error">{emailError}</div>
                </div>
            </div>

            <div className="confirm-email">
                <label className="submit__label" htmlFor="confirm-email">Confirm Email<span className="req">*</span></label>
                <div>
                    <input className="confirm-email__input" name="confirm-email" id="confirm-email" type="text" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
                    <div className="confirm-email__error">{confirmEmailError}</div>
                </div>
            </div>

            <div className="address">
                <label className="submit__label" htmlFor="address">Shipping Address<span className="req">*</span></label>
                <div>
                    <input className="address__input" name="address" id="address" type="text" value={address} onChange={handleAddressChange} />
                    <div className="address__error">{addressError}</div>
                </div>
            </div>


            <label className='checkbox__label'>
                <input type="checkbox" checked={isSameAddress} onChange={handleCheckboxChange} />
                Same as shipping address
            </label>

            <div className="billing-address">
                <label className="submit__label" htmlFor="billing-address">Billing Address<span className="req">*</span></label>
                <div>
                    <input className="billing-address__input" name="billing-address" id="billing-address" type="text" value={billingAddress} onChange={handleBillingAddressChange} />
                    <div className="billing-address__error">{billingAddressError}</div>
                </div>
            </div>


            <div className="card">
                <label className="submit__label" htmlFor="card">Card Number<span className="req">*</span></label>
                <div>
                    <input className="card__input" name="card" id="card" type="text" value={card} onChange={(e) => setCard(e.target.value)} />
                    <div className="card__error">{cardError}</div>
                </div>
            </div>

            <Button className="submit__button" type="submit">Checkout</Button>
        </form>
    )
}

export default CheckoutForm;