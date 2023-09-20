import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

import { XMarkIcon } from '@heroicons/react/24/solid'
import { OrderCard } from '../OrderCard'

import './styles.css'

function CheckOutSideMenu() {
  const {
    isCheckOutSideMenuOpen,
    closeCheckOutSideMenu,
    cartProducts
  } = useContext(ShoppingCartContext)

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
          <div className='px-6'>
            {cartProducts.map((product) => (
              <OrderCard
                key={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
              />
            ))}
          </div>
        </aside>
      )}
    </>
  )
}

export { CheckOutSideMenu }
