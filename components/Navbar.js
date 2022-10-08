import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <>
          <header className='p-2'>
              <h1>Logo</h1>
            
          </header>

          <nav>
              <ul className='list-none text-lg p-4 flex gap-5 bg-black text-white'>
                  <Link href={'/'}>
                      <li>Home</li>
         </Link>
                  <Link href={'/'}>
                      <li>Login</li>
         </Link>
                  <Link href={'/'}>
                      <li>signup</li>
         </Link>
              </ul>
          </nav>
          
    </>
  )
}

export default Navbar