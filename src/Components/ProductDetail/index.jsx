import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

import { XMarkIcon } from '@heroicons/react/24/solid'

import './styles.css'

function ProductDetail() {
  const {
    isProductDetailOpen,
    closeProductDetail,
    productToShow
  } = useContext(ShoppingCartContext)

  return (
    <>
      {isProductDetailOpen && (
        <aside className="fixed right-0 flex flex-col overflow-auto bg-white border border-black rounded-lg product-detail">
          <div className='flex items-center justify-between p-6'>
            <h2 className='text-xl font-medium'>Detail</h2>
            <div onClick={() => closeProductDetail()}>
              <XMarkIcon className="w-6 h-6 text-black cursor-pointer"></XMarkIcon>
            </div>
          </div>
          <figure className='px-6'>
            <img
              className='object-cover w-full h-full rounded-lg'
              src={productToShow.image}
              alt={productToShow.title} />
            <p className='flex flex-col p-6'>
              <span className='text-2xl font-medium'>${productToShow.price}</span>
              <span className='font-medium text-md'>{productToShow.title}</span>
              <span className='text-sm font-light'>{productToShow.description}</span>
            </p>
          </figure>
        </aside>
      )}
    </>
  )
}

export { ProductDetail }
