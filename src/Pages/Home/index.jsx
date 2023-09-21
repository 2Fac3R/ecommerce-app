import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"

function Home() {
  const { products } = useContext(ShoppingCartContext)

  return (
    <div className="Home">
      <div className="grid w-full max-w-screen-lg grid-cols-4 gap-6 mr-2">
        {products.map((product) => (
          <Card
            key={product.id}
            {...product}
          />
        ))}
      </div>
      <ProductDetail />
    </div>
  )
}

export { Home }
