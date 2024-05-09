function CoffeeItem({ name, small, med, large }) {
    return (
        <div className="coffee__item">
            <p className="menu__name">{name}</p>
            <p>{small}</p>
            <p>{med}</p>
            <p>{large}</p>
        </div>
    );
};

export default CoffeeItem;