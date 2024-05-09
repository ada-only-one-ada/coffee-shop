function Button({ className, children, onClick, disabled = false }) {
    if (disabled === true) {
        className = "button__disabled";
    }

    return (
        <button
            disabled={disabled}
            className={className}
            onClick={onClick}>
            {children}
        </button >
    );
}

export default Button; 