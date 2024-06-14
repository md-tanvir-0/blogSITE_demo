import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './components/index';
import Header from './components/header';
import './index.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
  <Index />
    </>
  )
}

export default App
