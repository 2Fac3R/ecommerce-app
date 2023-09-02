import { NavLink } from 'react-router-dom'

function NavBar() {
  const activeStyle = 'underline underline_offset_4'

  return (
    <nav className='flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-4'>
        <li className='font-semibold text-lg'>
          <NavLink to=''>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to=''
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/fornitures'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Fornitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-4'>
        <li>
          <NavLink to='/email' className='text-black/60'>
            genr1818@gmail.com
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-orders' className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in' className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Sign In
          </NavLink>
        </li>
        <li>
          [0]
          {/* Carrito Icon */}
        </li>
      </ul>
    </nav>
  )
}

export { NavBar }