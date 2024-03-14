import Link from 'next/link'
import SingleFeature from './SingleFeature'

const features = [
  {
    id: 1,
    title: 'Find images using Unsplash API',
    description:
      'Unsplash API is a great source of images. You can use it to find images for your projects.',
    cta: 'Find images',
    link: '/generate-image',
    path: 'M22 12h-4l-3 9L9 3l-3 9H2',
  },
  {
    id: 2,
    title: 'Generate images using Pixart AI',
    description:
      'You can use AI to generate images. It is a great way to create images for your projects.',
    cta: 'Generate images',
    link: '/ai-generate-image',
    path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
]

const Feature = () => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='flex flex-wrap -m-4'>
          {features.map(feat => (
            <SingleFeature key={feat.id} {...feat} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Feature
