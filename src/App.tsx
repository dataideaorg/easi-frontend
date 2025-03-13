import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Training from './pages/Training'
import Consultancy from './pages/Consultancy'
import Contact from './pages/Contact'
import BackToTop from './components/BackToTop'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <div className="w-full items-center">
        <div className="flex flex-col min-h-screen ">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/training" element={<Training />} />
              <Route path="/consultancy" element={<Consultancy />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
