import ImageCardContainer from '@/components/ImageCardContainer'
import Skeleton from '@/components/ui/Skeleton'
import { Suspense } from 'react'

const GenerateImagePage = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <ImageCardContainer />
    </Suspense>
  )
}
export default GenerateImagePage
