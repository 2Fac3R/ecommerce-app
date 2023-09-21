/**
 * Returns the total price of a new order for cart items
 * @param {Array} items cartProducts
 * @returns {Number} sum of product prices
 */
export const totalPrice = (items) => {
  return items.reduce((sum, product) => sum + product.price, 0)
}
