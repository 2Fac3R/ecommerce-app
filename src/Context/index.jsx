import { createContext, useState, useEffect } from "react"

export const API_URL = 'https://fakestoreapi.com'
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

  // Shopping Cart - Order
  const [order, setOrder] = useState([])

  // Get products
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/products`)
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    }
    fetchData()
  }, [])

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
      closeCheckOutSideMenu,
      order,
      setOrder,
      products,
      setProducts
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
