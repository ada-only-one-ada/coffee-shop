import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Checkout from "../pages/Checkout";
import LoginForm from "../pages/LoginForm";

function Content({ onLogin, error, page, loginStatus, cart, totalCost, onIncrease, onDecrease, onRemove, addToCart, setPage }) {
    return (
        <main id="main-content">
            {(page === 'Home') && <Home />}
            {(page === 'Menu') && <Menu />}
            {(page === 'Shop') && <Shop loginStatus={loginStatus} cart={cart} totalCost={totalCost} onIncrease={onIncrease} onDecrease={onDecrease} onRemove={onRemove} addToCart={addToCart} setPage={setPage} />}
            {(page === 'About') && <About />}
            {(page === 'Login') && <LoginForm onLogin={onLogin} error={error} />}
            {(page === 'Checkout') && <Checkout cart={cart} totalCost={totalCost} onRemove={onRemove} />}
        </main>
    );
}

export default Content;