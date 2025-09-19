import { useState } from 'react'
import Navigation from './components/navigation';
import Hero from './Components/HeroSection';
// import './App.css'
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
   <div><Navigation/>
   <Hero/>
   </div>
  );
}

export default App
