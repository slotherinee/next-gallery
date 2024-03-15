import { FaHeart, FaRegHeart, FaCloudDownloadAlt } from 'react-icons/fa'

const SingleImageCard = () => {
  return (
    <div className='relative min-h-5 w-full'>
      <img
        src='https://source.unsplash.com/600x700/?nature'
        alt='Image'
        className='w-full rounded-lg object-cover'
      />
      <div className='absolute inset-0 flex items-end justify-center opacity-0 transition-opacity delay-300 duration-300 hover:opacity-100'>
        <div className='bg-black bg-opacity-75 p-4 rounded-lg w-full flex justify-between flex-row-reverse items-center'>
          <div className='mt-3'>
            <button className='mb-2 mr-1 px-4 py-2 bg-white text-black rounded-lg'>
              <FaRegHeart />
            </button>
            <button className='px-4 py-2 bg-white text-black rounded-lg'>
              <FaCloudDownloadAlt />
            </button>
          </div>
          <div className='mt-2 flex items-center'>
            <img
              src='https://source.unsplash.com/200x300/?nature'
              alt='Author'
              className='w-8 h-8 rounded-full'
            />
            <div className='ml-2 text-white'>
              <p className='font-bold'>Author Name</p>
              <p className='text-sm'>Author Surname</p>
            </div>
            div
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleImageCard
