import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import { programs, CONTACT_EMAIL } from '../data/programs';

export default function Programs() {
  return (
    <PageLayout>
      <HeroBanner
        badge="Free for All Students"
        title="Programs Built to Empower"
        subtitle="Every workshop is free, student-led, and designed to give real-world financial skills."
      />

      <section style={{ padding: '80px 24px', background: '#f7f9fc' }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 28,
          }}
        >
          {programs.map((program) => (
            <div
              key={program.num}
              style={{
                background: '#fff',
                borderRadius: 18,
                padding: '36px 32px',
                border: '1px solid #d1d5db',
                boxShadow: '0 2px 16px rgba(10,22,40,0.06)',
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#17a2d8',
                  letterSpacing: '0.08em',
                  marginBottom: 16,
                }}
              >
                {program.num}
              </div>
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  marginBottom: 14,
                  color: '#0a1628',
                }}
              >
                {program.title}
              </h3>
              <p
                style={{
                  color: '#4a5a72',
                  lineHeight: 1.7,
                  fontSize: 14,
                  marginBottom: 20,
                }}
              >
                {program.desc}
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  marginBottom: 24,
                }}
              >
                {program.topics.map((topic) => (
                  <span
                    key={topic}
                    style={{
                      background: 'rgba(23,162,216,0.1)',
                      color: '#0d85b5',
                      borderRadius: 20,
                      padding: '4px 12px',
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <Link
                to="/get-involved"
                style={{
                  color: '#17a2d8',
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: 'none',
                }}
              >
                Join this workshop →
              </Link>
            </div>
          ))}

          <div
            style={{
              background: '#0a1628',
              borderRadius: 18,
              padding: '36px 32px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div style={{ fontSize: 18, color: '#17a2d8', marginBottom: 16 }}>
              ★
            </div>
            <h3
              style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                marginBottom: 14,
                color: '#fff',
              }}
            >
              Request a Custom Session
            </h3>
            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.7,
                fontSize: 14,
                marginBottom: 24,
              }}
            >
              Have a school, youth group, or community org that needs a tailored
              financial literacy session? We'll build something for you — at no
              cost.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{
                color: '#17a2d8',
                fontWeight: 700,
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              Email us to get started →
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
