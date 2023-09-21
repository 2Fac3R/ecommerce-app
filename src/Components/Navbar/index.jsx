import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'


function NavBar() {
  const context = useContext(ShoppingCartContext)

  const leftMenu = [
    {
      to: '/electronics',
      text: 'Electronics',
    },
    {
      to: '/jewelery',
      text: 'Jewelery',
    },
    {
      to: '/men\'s clothing',
      text: 'Men\'s clothing',
    },
    {
      to: '/women\'s clothing',
      text: 'Women\'s clothing',
    },
  ]

  const rightMenu = [
    {
      to: 'mailto:genr1818@gmail.com',
      text: 'genr1818@gmail.com',
    },
    {
      to: '/my-orders',
      text: 'My Orders',
    },
    {
      to: '/my-account',
      text: 'My Account',
    },
    {
      to: '/sign-in',
      text: 'Sign In',
    },
  ]
  const activeStyle = 'underline underline_offset_4'

  return (
    <nav className='fixed top-0 z-10 flex items-center justify-between w-full px-8 py-5 text-sm font-light bg-white'>
      <ul className='flex items-center gap-4'>
        <li className='text-lg font-semibold'>
          <NavLink
            to=''
            onClick={() => context.setSearchByCategory()}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to=''
            onClick={() => context.setSearchByCategory()}
          >
            All
          </NavLink>
        </li>
        {leftMenu.map((item) =>
          <li key={item.text}>
            <NavLink
              to={item.to}
              onClick={() => context.setSearchByCategory(item.text.toLowerCase())}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              {item.text}
            </NavLink>
          </li>
        )}
      </ul>
      <ul className='flex items-center gap-4'>
        {rightMenu.map((item) =>
          <li key={item.text}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              {item.text}
            </NavLink>
          </li>
        )}

        <li>
          <NavLink
            to='#'
            onClick={() => context.openCheckoutSideMenu()}
            className='flex items-center'>
            <ShoppingBagIcon
              className="w-6 h-6 text-black"></ShoppingBagIcon>
            <span>{context.cartProducts.length}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export { NavBar }
