export type Feature = {
  id?: number
  title: string
  description: string
  cta: string
  link: string
  path: string
}

export type InputWithButton = {
  query: string
  setQuery: (query: string) => void
  setPhotos: (photos: SingleImageCardProps[]) => void
}

export type SingleImageCardProps = {
  id: string
  description: string
  user: {
    name: string
    links: {
      html: string
    }
    profile_image: {
      small: string
    }
  }
  urls: {
    regular: string
  }
  links: {
    html: string
    download: string
  }
}
