'use client'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components'
import Link from 'next/link'
import { FaRegUserCircle } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navigationLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Image gallery',
    href: '/find-image',
  },
  {
    title: 'AI image generator',
    href: '/generate-image',
  },
  {
    title: 'About us',
    href: '/about',
  },
]

const Header = () => {
  const { user } = useKindeBrowserClient()
  const pathname = usePathname()

  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='logo'
            width='0'
            height='0'
            sizes='100vw'
            className='w-20'
          />
        </Link>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
          {navigationLinks.map(link => (
            <Link
              key={link.title}
              className={`${
                pathname === link.href
                  ? 'text-gray-700 bg-gray-100 py-2 px-4 rounded'
                  : ''
              } mr-5`}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <button className='inline-flex items-center border-0 py-1 px-3 hover:bg-gray-100 rounded text-base mt-4 md:mt-0'>
          {user ? (
            <Link href='/profile'>
              {user.picture ? (
                <Image
                  className='rounded-xl'
                  src={user.picture}
                  width={20}
                  height={20}
                  sizes='100vw'
                  alt='user picture'
                />
              ) : (
                <FaRegUserCircle />
              )}
            </Link>
          ) : (
            <LoginLink postLoginRedirectURL='/profile'>
              Login | Sign up
            </LoginLink>
          )}
        </button>
      </div>
    </header>
  )
}
export default Header
