const fetchOrderBy = ['latest', 'oldest', 'popular']
const getRandomOrder = () => {
  return fetchOrderBy[Math.floor(Math.random() * fetchOrderBy.length)]
}

export const fetchUnsplashPhotos = async () => {
  const response = await fetch(
    `https://api.unsplash.com/photos/?client_id=${
      process.env.UNSPLASH_API_CLIENT_ID
    }&per_page=18&order_by=${getRandomOrder()}`,
    {
      cache: 'no-store',
    }
  )
  const data = await response.json()
  return data
}
