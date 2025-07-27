import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Training from './pages/Training'
import Consultancy from './pages/Consultancy'
import Contact from './pages/Contact'
import BackToTop from './components/BackToTop'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Resource from './pages/Resource';
import UpcomingTrainings from './pages/UpcomingTrainings';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/training" element={<Training />} />
              <Route path="/consultancy" element={<Consultancy />} />
              <Route path="/resources" element={<Resource />} />
              <Route path="/upcoming-trainings" element={<UpcomingTrainings />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
