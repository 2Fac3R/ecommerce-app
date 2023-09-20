/**
 * Returns the total price of a new order for cart products
 * @param {Array} products cartProducts
 * @returns {Number} sum of product prices
 */
export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0)
}
