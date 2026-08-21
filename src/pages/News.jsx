import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import {
  NEWSLETTER_URL,
  NEWSLETTER_NAME,
  newsletterHighlights,
} from '../data/news';

const subscribeButtonStyle = {
  display: 'inline-block',
  background: '#17a2d8',
  color: '#fff',
  padding: '16px 36px',
  borderRadius: 10,
  fontWeight: 700,
  fontSize: 16,
  textDecoration: 'none',
  boxShadow: '0 4px 20px rgba(23,162,216,0.35)',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

export default function News() {
  return (
    <PageLayout>
      <HeroBanner
        badge="Newsletter"
        title="Stay Informed with Investors Society"
        subtitle="Important news and insights from within the financial world — written for students who want to understand money, markets, and the forces shaping our economy."
        withGlow
        animated
      />

      <section className="motion-section" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(23,162,216,0.1)',
              border: '1px solid rgba(23,162,216,0.3)',
              color: '#0d85b5',
              borderRadius: 20,
              padding: '5px 16px',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Our Newsletter
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              marginBottom: 20,
            }}
          >
            {NEWSLETTER_NAME}
          </h2>
          <p
            style={{
              color: '#4a5a72',
              lineHeight: 1.8,
              marginBottom: 32,
              fontSize: 17,
            }}
          >
            The Financial Initiative publishes {NEWSLETTER_NAME} on Substack —
            a newsletter featuring timely financial news, market analysis, and
            insights that help students connect classroom concepts to the real
            world.
          </p>
          <a
            className="motion-button"
            href={NEWSLETTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={subscribeButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow =
                '0 8px 28px rgba(23,162,216,0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 4px 20px rgba(23,162,216,0.35)';
            }}
          >
            Subscribe on Substack
          </a>
        </div>
      </section>

      <section className="motion-section" style={{ padding: '80px 24px', background: '#f7f9fc' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                marginBottom: 12,
              }}
            >
              What You'll Find
            </h2>
            <p style={{ color: '#4a5a72', maxWidth: 520, margin: '0 auto' }}>
              Each issue covers the topics that matter most to young investors
              and financially curious students.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 24,
            }}
          >
            {newsletterHighlights.map((item) => (
              <div
                className="motion-card motion-news-card"
                key={item.title}
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  padding: 32,
                  border: '1px solid #d1d5db',
                  boxShadow: '0 2px 16px rgba(10,22,40,0.04)',
                }}
              >
                <span style={{ fontSize: 28, display: 'block', marginBottom: 16 }}>
                  {item.icon}
                </span>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 10 }}>
                  {item.title}
                </div>
                <p
                  style={{
                    color: '#4a5a72',
                    fontSize: 14,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="motion-section" style={{ padding: '80px 24px' }}>
        <div
          className="motion-news-cta"
          style={{
            maxWidth: 720,
            margin: '0 auto',
            textAlign: 'center',
            background:
              'linear-gradient(135deg, #0a1628 0%, #0d2347 60%, #1a3a6b 100%)',
            color: '#fff',
            borderRadius: 20,
            padding: '56px 40px',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
              fontWeight: 800,
              marginBottom: 16,
            }}
          >
            Never Miss an Issue
          </h2>
          <p
            style={{
              opacity: 0.8,
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 480,
              margin: '0 auto 32px',
            }}
          >
            Join readers who follow {NEWSLETTER_NAME} for weekly financial news
            and analysis. Subscribing is free — click below to read past issues
            or sign up for future ones.
          </p>
          <a
            className="motion-button motion-button--light"
            href={NEWSLETTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...subscribeButtonStyle,
              background: '#fff',
              color: '#0a1628',
              boxShadow: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Visit {NEWSLETTER_NAME}
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
