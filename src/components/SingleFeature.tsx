import Link from 'next/link'
import { Feature } from '@/types/types'

const SingleFeature = ({ title, description, cta, link, path }: Feature) => {
  return (
    <div className='p-4 lg:w-1/2 md:w-full'>
      <div className='flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col'>
        <div className='w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0'>
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            stroke-width='2'
            className='w-8 h-8'
            viewBox='0 0 24 24'
          >
            <path d={path}></path>
          </svg>
        </div>
        <div className='flex-grow'>
          <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
            {title}
          </h2>
          <p className='leading-relaxed text-base'>{description}</p>
          <Link
            href={link}
            className='mt-3 text-blue-500 inline-flex items-center'
          >
            {cta}
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              stroke-width='2'
              className='w-4 h-4 ml-2'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default SingleFeature
