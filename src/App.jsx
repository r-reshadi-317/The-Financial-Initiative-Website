import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';
import LegalAdvocacy from './pages/LegalAdvocacy';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/legal-advocacy" element={<LegalAdvocacy />} />
      <Route path="/about" element={<About />} />
      <Route path="/get-involved" element={<GetInvolved />} />
    </Routes>
  );
}
