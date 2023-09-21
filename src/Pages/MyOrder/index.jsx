import { useContext } from "react"
import { Link, useParams } from 'react-router-dom'
import { ShoppingCartContext } from "../../Context"

import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { OrderCard } from "../../Components/OrderCard"

function MyOrder() {
  const { order } = useContext(ShoppingCartContext)
  const { id } = useParams();
  const pathName = window.location.pathname

  let index = id;
  if (pathName === '/my-orders/last') index = order?.length - 1

  return (
    <>
      <div className='relative flex items-center justify-center mb-6 w-80'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='w-6 h-6 text-black cursor-pointer' />
        </Link>
        <h1 className='text-xl font-medium'>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {order?.[index]?.items?.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
      </div>
    </>
  )
}

export { MyOrder }
