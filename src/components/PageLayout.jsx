import Header from './Header';
import Footer from './Footer';

const pageStyle = {
  fontFamily: "'Inter', 'Segoe UI', sans-serif",
  background: '#fff',
  color: '#0a1628',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

export default function PageLayout({ children }) {
  return (
    <div style={pageStyle}>
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}
