import { useEffect } from 'react'

export function useDestinations(destinations, setDestinations) {
  useEffect(() => {
    if (!destinations)
      return () => {
        setDestinations([]) // todo
      }
  }, [destinations, setDestinations])
}
