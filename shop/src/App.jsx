import { useState } from 'react'

import './App.css'
import { Header } from './components/header'
import { CardComponent } from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CardComponent title="test" description="설명" image="https://picsum.photos/200/300"/>
    </>
  )
}

export default App
