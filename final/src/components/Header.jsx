import Nav from "./Nav";
import { LOGIN_STATUS } from '../constants';
import Button from "./Button";

function Header({ setPage, loginStatus, onLogout, username }) {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">Echo Café 三毛咖啡</h1>
                <a href="#main-content" className="skip">Skip to main content</a>
                <div className="header__buttons">
                    {loginStatus === LOGIN_STATUS.IS_LOGGED_IN ?
                        <>
                            <span>Hi, {username}</span>
                            <Button className="logout__button" onClick={() => { setPage("Home"); onLogout(); }} aria-label="A logout icon button">
                                <i className="gg-log-out" aria-label="A logout icon button"></i>
                            </Button>
                        </> :
                        <Button className="user__button" onClick={() => setPage("Login")} aria-label="A user login icon button">
                            <i className="gg-user" aria-label="A user login icon button"></i>
                            <span>Sign In</span>
                        </Button>
                    }
                </div>
            </div>
            <Nav className="header__nav" setPage={setPage} />
        </header >
    );
}

export default Header;



