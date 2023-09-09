function Card({ title, price, image, category }) {
  return (
    <div className="w-56 bg-white rounded-lg cursor-pointer h-60">
      <figure className="relative w-full mb-2 h-4/5">
        <span className="absolute bottom-0 left-0 bg-while/60 rounded-lg bg-white text-black text-xs m-2 px-2 py-0.5">
          {category}
        </span>
        <img
          className="object-cover w-full h-full rounded-lg"
          src={image}
          alt={title} />
        <button className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 m-2 truncate bg-white rounded-full">
          +
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  )
}

export { Card }