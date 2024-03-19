import './App.css'
import About from './components/About/About'

import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Portfolio from './components/Portfolio/Portfolio'
import Service from './components/Service/Service'
import Skills from './components/Skills/Skills'
import Translation from './components/Translation/Translation'

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <About />
        <Service />
        <Skills />
        <Portfolio />
        <Translation />
      </div>
      <Footer />
    </>
  )
}

export default App
