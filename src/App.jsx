import React from 'react'
import Button from './components/Button'

import pic from './assets/react.svg'

// Install tailwindcss @tailwindcss/vite tailwind-merge

export default function App() {
  return (
    <div>
      <h1>Custom Component</h1>

      <section>
        <Button variant='destructive' onClick={() => alert("Click Me!")}>Click Me</Button>
        <Button text='ngeks...' className={'bg-green-500'} />
        <Button className={'bg-amber-600'}><img src={pic} alt="react" /></Button>
        <Button variant='muted'>Disabled</Button>
      </section>
    </div>
  )
}
