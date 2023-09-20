import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'


function NavBar() {
  const { count, openCheckOutSideMenu } = useContext(ShoppingCartContext)

  const leftMenu = [
    {
      to: '/',
      text: 'All',
    },
    {
      to: '/clothes',
      text: 'Clothes',
    },
    {
      to: '/electronics',
      text: 'Electronics',
    },
    {
      to: '/fornitures',
      text: 'Fornitures',
    },
    {
      to: '/toys',
      text: 'Toys',
    },
    {
      to: '/others',
      text: 'Others',
    },
  ]

  const rightMenu = [
    {
      to: '/email',
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
          <NavLink to=''>
            Shopi
          </NavLink>
        </li>
        {leftMenu.map((item) =>
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
            to=''
            className='flex items-center'>
            <ShoppingBagIcon
              onClick={() => openCheckOutSideMenu()}
              className="w-6 h-6 text-black"></ShoppingBagIcon>
            <span>{count}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export { NavBar }
