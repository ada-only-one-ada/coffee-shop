import '../css/Menu.css';

import CoffeeItem from '../components/CoffeeItem';

function Menu() {
    return (
        <div className="menu">
            <div className='menu__container'>
                <h2>Echo Café 三毛咖啡</h2>
                <h3>MENU</h3>
                <br></br>
                <hr />
                <br></br>
                <p className='category'>DRINKS</p>
                <br></br>

                <CoffeeItem name="Name" small="Small" med="Med" large="Large" />
                <br></br>
                <CoffeeItem name="Sahara Sunrise" small="2.5" med="-" large="-" />
                <CoffeeItem name="Canary Whispers" small="3" med="3.5" large="4" />
                <CoffeeItem name="Taipei Tale Americano" small="3" med="3.5" large="4" />
                <CoffeeItem name="Saharan Cappuccino" small="3.5" med="4" large="4.5" />
                <CoffeeItem name="Nomad’s Mocha" small="3.5" med="4" large="4.5" />
                <CoffeeItem name="Barcelona Vanilla Latte" small="3.5" med="4" large="4.5" />
                <CoffeeItem name="Special Hazelnut Coffee" small="3" med="3.5" large="4" />
                <CoffeeItem name="Desert Oasis Lemon Tea" small="2" med="2.5" large="4" />
                <CoffeeItem name="Madrid Green Tea" small="2.5" med="2.5" large="3.5" />
                <CoffeeItem name="Echo’s Earl Grey" small="2" med="2.5" large="3" />
                <CoffeeItem name="Velvet Chocolate" small="3.5" med="4" large="4.5" />

                <br></br>
                <p className='category'>FOOD</p>
                <br></br>

                <CoffeeItem name="Tenerife Croissant" small="4" />
                <CoffeeItem name="Gran Canaria Bagel" small="5" />
                <CoffeeItem name="Lanzarote Muffin" small="5.5" />
                <CoffeeItem name="Fuerteventura Toast" small="6" />
                <CoffeeItem name="La Gomera Hamburger" small="8" />
                <CoffeeItem name="El Hierro Waffle" small="8" />
                <CoffeeItem name="La Palma Pancake" small="9" />
            </div>
        </div>
    )
}

export default Menu;