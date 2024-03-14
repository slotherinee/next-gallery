import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='text-gray-600 body-font'>
      <div className='container  px-5 py-6 mx-auto flex justify-between items-center sm:flex-row flex-col'>
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
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4'>
          © 2024 —
          <a
            href='https://twitter.com/knyttneve'
            className='text-gray-600 ml-1'
            rel='noopener noreferrer'
            target='_blank'
          >
            @slotherinee
          </a>
        </p>
      </div>
    </footer>
  )
}
export default Footer
