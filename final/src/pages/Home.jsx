import '../css/Home.css';
import storeImg from '/store.jpg';

function Home() {
    return (
        <div className='hero'>
            <img src={storeImg} className="store__img" alt="Two man at coffee shop counter" />
            <div className='store__details'>
                <p className="store__address">C. Goya, 2, 35214 Playa del Hombre, Las Palmas, Spain</p>
                <p className="store__hours">Open Daily: 7am - 7pm</p>
            </div>
        </div>
    )
}

export default Home;