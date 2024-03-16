'use client'
import SingleImageCard from './SingleImageCard'
import type { InputWithButton, SingleImageCardProps } from '@/types/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'

export function InputWithButton({
  query,
  setQuery,
  setPhotos,
}: InputWithButton) {
  'use client'
  console.log(process.env.UNSPLASH_API_CLIENT_ID)
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_API_CLIENT_ID}&per_page=18&query=${query}`,
      {
        cache: 'no-cache',
      }
    )
    const data = await response.json()
    setPhotos(data)
  }
  return (
    <div className='flex mt-10 max-w-full items-center justify-center space-x-2'>
      <form className='flex gap-3'>
        <Input
          value={query}
          onChange={e => setQuery(e.target.value)}
          className='w-80'
          type='text'
          placeholder='Find your image'
        />
        <Button onClick={handleSearch} type='submit'>
          Search
        </Button>
      </form>
    </div>
  )
}

const ImageCardContainer = () => {
  'use client'
  const [photos, setPhotos] = useState<null | SingleImageCardProps[]>(null)
  const [query, setQuery] = useState('')
  useEffect(() => {
    const fetchUnsplashPhotos = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=${process.env.UNSPLASH_API_CLIENT_ID}&per_page=18`,
        {
          cache: 'no-cache',
        }
      )
      const data = await response.json()
      setPhotos(data)
    }
    fetchUnsplashPhotos()
  }, [])

  return (
    <>
      <InputWithButton
        setPhotos={setPhotos}
        query={query}
        setQuery={setQuery}
      />
      <div className='container mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-x-4 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-8 justify-center items-center p-5'>
        {photos &&
          photos.map((photo: SingleImageCardProps) => (
            <SingleImageCard key={photo.id} {...photo} />
          ))}
      </div>
    </>
  )
}
export default ImageCardContainer
