import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"

import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"

export function Home() {
  const context = useContext(ShoppingCartContext)
  const { category } = useParams()

  useEffect(() => {
    if (category?.length > 0) context.setSearchByCategory(category.toLowerCase())
  }, [category])

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} {...item} />
        ))
      )
    } else {
      return (
        <div>We don't have anything :(</div>
      )
    }
  }

  return (
    <>
      <div className='relative flex items-center justify-center mb-4 w-80'>
        <h1 className='text-xl font-medium'>Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder='Search a product'
        className='p-4 mb-4 border border-black rounded-lg w-80 focus:outline-none'
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className='grid w-full max-w-screen-lg grid-cols-4 gap-4'>
        {renderView()}
      </div>
      <ProductDetail />
    </>
  )
}
