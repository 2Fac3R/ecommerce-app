import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export function ShoppingCartProvider({ children }) {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0)
  // ProductDetail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const productDetailToggle = () => setIsProductDetailOpen(!isProductDetailOpen)
  // ProductDetail - Show product
  const [productDetails, setProductDetails] = useState({})


  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      setIsProductDetailOpen,
      productDetailToggle,
      productDetails,
      setProductDetails,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
