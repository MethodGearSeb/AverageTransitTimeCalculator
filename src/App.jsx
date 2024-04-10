import { useState } from 'react'
import { useDestinations } from './hooks'

export default function App() {
  const [destinations, setDestinations] = useState(null)

  useDestinations(destinations, setDestinations)

  return null
}
