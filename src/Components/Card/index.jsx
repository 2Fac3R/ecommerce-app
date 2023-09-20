import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

function Card(props) {
  const { id, title, price, image, category } = props
  const {
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    setProductDetails,
    cartProducts,
    setCartProducts,
    openCheckOutSideMenu,
    closeCheckOutSideMenu,
  } = useContext(ShoppingCartContext)

  const showProduct = (product) => {
    closeCheckOutSideMenu()
    openProductDetail()
    setProductDetails(product)
  }

  const addProductToCart = (e, product) => {
    e.stopPropagation()
    setCount(count + 1)
    setCartProducts([...cartProducts, product])
    closeProductDetail()
    openCheckOutSideMenu()
  }

  const renderIcon = (id) => {
    const isInCart = cartProducts.some(product => product.id === id)
    return (
      isInCart ? (
        <button
          className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 m-2 truncate bg-white rounded-full">
          <CheckIcon className="w-6 h-6 text-black"></CheckIcon>
        </button>
      ) : (
        <button
          onClick={(e) => addProductToCart(e, props)}
          className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 m-2 truncate bg-white rounded-full">
          <PlusIcon className="w-6 h-6 text-black"></PlusIcon>
        </button>
      )
    )
  }

  return (
    <div
      onClick={() => showProduct(props)}
      className="w-56 bg-white rounded-lg cursor-pointer h-60">
      <figure className="relative w-full mb-2 h-4/5">
        <span className="absolute bottom-0 left-0 bg-while/60 rounded-lg bg-white text-black text-xs m-2 px-2 py-0.5">
          {category}
        </span>
        <img
          className="object-cover w-full h-full rounded-lg"
          src={image}
          alt={title} />
        {renderIcon(id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div >
  )
}

export { Card }
