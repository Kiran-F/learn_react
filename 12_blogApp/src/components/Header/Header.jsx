import React from 'react'
import {Container, LogoutBtn, Logo} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status); //to get the current state.
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='py-4 bg-[#FF90E8] border-b-4 border-black sticky top-0 z-50'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto items-center space-x-2'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button className='inline-block px-5 py-2 font-black uppercase tracking-wider text-black border-4 border-transparent hover:border-black hover:bg-[#FFE800] transition-colors shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                  onClick={() => navigate(item.slug)}>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
export default Header