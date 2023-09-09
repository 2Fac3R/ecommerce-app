import { useState, useEffect } from "react"
import { Card } from "../../Components/Card"

const API_URL = 'https://fakestoreapi.com'

function Home() {
  const [products, setProducts] = useState([])

  // useEffect(() => {
  //   fetch(`${API_URL}/products`)
  //     .then(response => response.json())
  //     .then(data => setProducts(data))
  // }, [])

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
    <div className="Home">
      <div className="grid w-full max-w-screen-lg grid-cols-4 gap-6 mr-2">
        {products.map((product) => (
          <Card
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  )
}

export { Home }