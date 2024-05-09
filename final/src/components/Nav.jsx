import { useState } from "react";

const menu = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu.html' },
    { name: 'Shop', path: '/shop.html' },
    { name: 'About', path: '/about.html' }
]

function Nav({ className, setPage }) {
    const [isNavShown, setIsNavShown] = useState(false);
    const onShow = () => {
        setIsNavShown(!isNavShown);
    }

    const listHtml = menu.map(item => {
        return (
            <li key={item.name} className="nav__item">
                <a className="nav__link" href={item.path} onClick={(e) => { e.preventDefault(); setPage(e.target.innerText) }}>{item.name}</a>
            </li>
        );
    });

    return (
        <>
            <button className="hamburger__button" onClick={onShow} aria-expanded="false" aria-label="A hamburger button"><i className="gg-menu" aria-label="A hamburger menu icon"></i></button >
            <nav className={`nav ${className}`}>
                <ul className={`nav__list ${isNavShown ? 'shown' : ''}`}>{listHtml}</ul>
            </nav>
        </>
    );
}

export default Nav;