
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { fetchSession, fetchLogin, fetchLogout, getCart, updateCart } from './services'
import { LOGIN_STATUS, CLIENT, SERVER } from './constants';

function App() {
  const [page, setPage] = useState('Home');
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [loginStatus, setLoginStatus] = useState(LOGIN_STATUS.NOT_LOGGED_IN);

  const [cart, setCart] = useState({});

  const onRemove = () => {
    setCart({});
    updateCart({}).then((receivedCart) => {
      setCart(receivedCart)
    }).catch(() => {
      setPage('Login');
      setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
    });
  };

  const addToCart = (productToAdd) => {
    const existingProduct = cart[productToAdd.id];

    let updatedCart = {}

    if (!existingProduct) {
      updatedCart = {
        ...cart,
        [productToAdd.id]: productToAdd
      }
    } else {
      const updatedItem = {
        ...existingProduct,
        quantity: existingProduct.quantity + productToAdd.quantity,
        totalCost: existingProduct.totalCost + productToAdd.totalCost
      }

      updatedCart = {
        ...cart,
        [productToAdd.id]: updatedItem
      }
    }

    updateCart(updatedCart).then((receivedCart) => {
      setCart(receivedCart)
    }).catch(() => {
      setPage('Login');
      setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
    })
  };

  const onIncrease = (productId) => {
    const item = cart[productId];
    const updatedItem = {
      ...item,
      quantity: item.quantity + 1,
      totalCost: item.totalCost + item.price,
    }

    const updatedCart = {
      ...cart,
      [productId]: updatedItem
    }

    updateCart(updatedCart).then((receivedCart) => {
      setCart(receivedCart)
    });
  };

  const onDecrease = (productId) => {
    const item = cart[productId];
    const updatedItem = {
      ...item,
      quantity: item.quantity - 1,
      totalCost: item.totalCost - item.price,
    }

    const updatedCart = {
      ...cart,
      [productId]: updatedItem
    }

    if (updatedCart[productId].quantity == 0) {
      delete updatedCart[productId]
    }

    updateCart(updatedCart).then((receivedCart) => {
      setCart(receivedCart)
    });

    setCart(updatedCart)
  }

  function onLogin(username) {
    fetchLogin(username)
      .then(cart => {
        setError('');
        setCart(cart);
        setUsername(username);
        setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
        setPage("Shop");
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
      });
  }

  function onLogout() {
    setError('');
    setCart({});
    setUsername('');
    setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
    fetchLogout()
      .catch(err => {
        setError(err?.error || 'ERROR');
      });
  }

  function checkForSession() {
    fetchSession()
      .then(session => {
        setUsername(session.username);
        setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
        return getCart();
      })
      .catch(err => {
        if (err?.error === SERVER.AUTH_MISSING) {
          return Promise.reject({ error: CLIENT.NO_SESSION })
        }
        return Promise.reject(err);
      })
      .then(cart => {
        setCart(cart);
      })
      .catch(err => {
        if (err?.error === CLIENT.NO_SESSION) {
          setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
          return;
        }
        setError(err?.error || 'ERROR');
      });
  }

  useEffect(
    () => {
      checkForSession();
    },
    []
  );

  const totalCost = Object.values(cart).reduce((sum, item) => sum + item.totalCost, 0);

  return (
    <div className='app'>
      <Header setPage={setPage} loginStatus={loginStatus} onLogout={onLogout} username={username} />
      <Content page={page} onLogin={onLogin} error={error} loginStatus={loginStatus} cart={cart} totalCost={totalCost} onRemove={onRemove} onIncrease={onIncrease} onDecrease={onDecrease} addToCart={addToCart} setPage={setPage} />
      <Footer />
    </div>
  )
}

export default App;





