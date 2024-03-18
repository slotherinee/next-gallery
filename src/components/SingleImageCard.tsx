import { SingleImageCardProps } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import { FaHeart, FaRegHeart, FaCloudDownloadAlt } from 'react-icons/fa'

const SingleImageCard = (props: SingleImageCardProps) => {
  return (
    <div className='relative min-h-5 w-full shadow-2xl'>
      <Image
        width={0}
        height={0}
        sizes='100vw'
        src={props.urls.regular}
        alt={props.description}
        className='w-full rounded-lg object-cover'
      />
      <div className='absolute inset-0 flex items-end justify-center opacity-0 transition-opacity delay-300 duration-300 hover:opacity-100'>
        <div className='bg-black bg-opacity-75 p-4 rounded-lg w-full flex justify-between flex-row-reverse items-center'>
          <div className='mt-3'>
            <button className='mb-2 mr-1 px-4 py-2 bg-white text-black rounded-lg'>
              <FaRegHeart />
            </button>
            <button className='px-4 py-2 bg-white text-black rounded-lg'>
              <Link target='_blank' href={props.links.download}>
                <FaCloudDownloadAlt />
              </Link>
            </button>
          </div>
          <div className='mt-2 flex items-center'>
            <Image
              src={props.user.profile_image.small}
              alt='Author'
              width={0}
              height={0}
              sizes='100vw'
              className='w-8 h-8 rounded-full'
            />
            <div className='ml-2 text-white'>
              <p className='font-bold underline cursor-pointer hover:no-underline'>
                <Link target='_blank' href={props.user.links.html}>
                  {props.user.name}
                </Link>
              </p>

              <p className='text-sm underline cursor-pointer hover:no-underline'>
                <Link target='_blank' href={props.links.html}>
                  Link to picture
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleImageCard
