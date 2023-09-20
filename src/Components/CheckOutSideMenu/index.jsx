import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../utils'

import { XMarkIcon } from '@heroicons/react/24/solid'
import { OrderCard } from '../OrderCard'

import './styles.css'

function CheckOutSideMenu() {
  const {
    count,
    setCount,
    isCheckOutSideMenuOpen,
    closeCheckOutSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder
  } = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id !== id)
    setCartProducts(filteredProducts)
    setCount(count - 1)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }

    setOrder([...order, orderToAdd])
    setCartProducts([])
  }

  return (
    <>
      {isCheckOutSideMenuOpen && (
        <aside className="fixed right-0 flex flex-col overflow-auto bg-white border border-black rounded-lg checkout-side-menu">
          <div className='flex items-center justify-between p-6'>
            <h2 className='text-xl font-medium'>My Order</h2>
            <div onClick={() => closeCheckOutSideMenu()}>
              <XMarkIcon className="w-6 h-6 text-black cursor-pointer"></XMarkIcon>
            </div>
          </div>
          <div className='flex-1 px-6'>
            {cartProducts.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
                handleDelete={handleDelete}
              />
            ))}
          </div>
          <div className='px-6 mb-6'>
            <p className='flex items-center justify-between mb-2'>
              <span className='font-light'>Total:</span>
              <span className='text-2xl font-medium'>${totalPrice(cartProducts)}</span>
            </p>
            <button
              onClick={() => handleCheckout()}
              className='w-full py-3 text-white bg-black rounded-lg'
            >
              Checkout
            </button>
          </div>
        </aside>
      )}
    </>
  )
}

export { CheckOutSideMenu }
