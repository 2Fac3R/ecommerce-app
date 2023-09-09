import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export function ShoppingCartProvider({ children }) {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0)

  // ProductDetail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // ProductDetail - Show product
  const [productDetails, setProductDetails] = useState({})

  // Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  // CheckOutSideMenu - Open/Close
  const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false)
  const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true)
  const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false)

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productDetails,
      setProductDetails,
      cartProducts,
      setCartProducts,
      isCheckOutSideMenuOpen,
      openCheckOutSideMenu,
      closeCheckOutSideMenu
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
