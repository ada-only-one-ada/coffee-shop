import { useState } from 'react';
import '../css/Login.css';
import Status from '../components/Status';
import Button from '../components/Button';

function LoginForm({ onLogin, error }) {
    const [username, setUsername] = useState('');

    function onChange(e) {
        setUsername(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        if (username) {
            onLogin(username);
        }
    }

    return (
        <div className="login">
            <form className="login__form" action="#/login" onSubmit={onSubmit}>
                <div className="login__container">
                    <label>
                        <span className='login__label'>Username:</span>
                        <input className="login__input" value={username} onChange={onChange} />
                    </label>
                    <Button className="login__button" type="submit" >Login</Button>
                </div>
                {error && <Status error={error} />}
            </form>

        </div>
    );

}

export default LoginForm;