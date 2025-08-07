import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import Grievance from './pages/Grievance';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CodeOfBusiness from './pages/CodeOfBusiness';
import ScrollToTop from './components/ScrollToTop';
import './styles/main.css';
import './styles/animations.css';
import './styles/responsive.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/code-of-business" element={<CodeOfBusiness />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;