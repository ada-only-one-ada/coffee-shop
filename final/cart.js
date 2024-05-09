const uuid = require('uuid').v4;

function makeCart() {
    let cart = {};

    function getCart() {
        return cart
    };

    function updateCart(updatedCart) {
        cart = updatedCart

        return updatedCart
    }
    return { getCart, updateCart };
};

module.exports = {
    makeCart,
};
