function Cities() {
  const { data: cities } = useSWR(
    'https://metromart.com/api/v1/cities',
    fetcher
  )

  return cities
}

export default Cities
