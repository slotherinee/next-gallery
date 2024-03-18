const Skeleton = () => {
  return (
    <div className='container mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-x-4 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-8 justify-center items-center p-5'>
      {new Array(18).fill(0).map((_, i) => (
        <div
          key={i}
          className='relative min-h-5 w-full shadow-2xl animate-pulse'
        >
          <div className='w-full rounded-lg object-cover h-64 bg-gray-200'></div>
          <div className='absolute inset-0 flex items-end justify-center opacity-0 transition-opacity delay-300 duration-300 hover:opacity-100'>
            <div className='bg-black bg-opacity-75 p-4 rounded-lg w-full flex justify-between flex-row-reverse items-center'>
              <div className='mt-3'>
                <button className='mb-2 mr-1 px-4 py-2 bg-white text-black rounded-lg'>
                  <div className='h-6 w-6 bg-gray-200 rounded-full'></div>
                </button>
                <button className='px-4 py-2 bg-white text-black rounded-lg'>
                  <div className='h-6 w-6 bg-gray-200 rounded-full'></div>
                </button>
              </div>
              <div className='mt-2 flex items-center'>
                <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
                <div className='ml-2 text-white'>
                  <div className='h-4 bg-gray-200 w-24 rounded mt-2'></div>
                  <div className='h-4 bg-gray-200 w-24 rounded mt-2'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Skeleton
