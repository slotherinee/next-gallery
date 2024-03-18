import { fetchUnsplashPhotos } from '@/utils/fetchUnsplash'
import SingleImageCard from './SingleImageCard'
import type { SingleImageCardProps } from '@/types/types'
import { Suspense } from 'react'

const ImageCardContainer = async () => {
  const photos = await fetchUnsplashPhotos()
  return (
    <div className='container mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-x-4 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-8 justify-center items-center p-5'>
      {photos &&
        photos.map((photo: SingleImageCardProps) => (
          <SingleImageCard key={photo.id} {...photo} />
        ))}
    </div>
  )
}
export default ImageCardContainer
