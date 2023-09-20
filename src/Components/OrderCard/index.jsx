import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = (props) => {
  const { title, imageUrl, price } = props

  return (
    <div className="flex items-center justify-between mb-3">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='object-cover w-full h-full rounded-lg' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        <XMarkIcon className='w-6 h-6 text-black cursor-pointer'></XMarkIcon>
      </div>
    </div>
  )
}

export { OrderCard }
