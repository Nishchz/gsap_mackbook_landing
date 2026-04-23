import NavBar from './Components/NavBar'
import Hero from "./components/Hero.jsx";
import ProductViewer from './Components/ProductViewer';
import gsap from 'gsap'
import { ScrollTrigger ,SplitText } from 'gsap/all'
import Showcase from './Components/Showcase';
import Performance from './Components/Performance';




gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <NavBar/>
        <Hero/>
        <ProductViewer/>
        <Showcase/>
        <Performance/>
        
      
     
       
    </main>
  )
}

export default App
