import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';

const pdfPath = '/legal-advocacy-letter.pdf';

const pillStyle = {
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
};

const cardStyle = {
  background: '#fff',
  borderRadius: 18,
  border: '1px solid #d1d5db',
  boxShadow: '0 2px 16px rgba(10,22,40,0.06)',
};

export default function LegalAdvocacy() {
  return (
    <PageLayout>
      <HeroBanner
        badge="Legal Advocacy"
        title="Supporting Stronger Financial Education"
        subtitle="Our advocacy work gives students a voice in policies that make practical personal finance education more accessible."
      />

      <section style={{ padding: '80px 24px', background: '#f7f9fc' }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.9fr) minmax(320px, 1.1fr)',
            gap: 40,
            alignItems: 'start',
          }}
          className="legal-advocacy-grid"
        >
          <div>
            <span style={pillStyle}>The Issue</span>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
                fontWeight: 800,
                color: '#0a1628',
                margin: '0 0 20px',
                lineHeight: 1.2,
              }}
            >
              Financial literacy needs time, flexibility, and real classroom
              depth.
            </h2>
            <p
              style={{
                color: '#4a5a72',
                lineHeight: 1.8,
                marginBottom: 18,
                fontSize: 15,
              }}
            >
              The Financial Initiative supports California Senate Bill 1147
              because it aligns with our mission to help students build
              financial skills early. The bill would give local educational
              agencies the flexibility to offer a comprehensive, year-long
              integrated personal finance course that can fulfill high school
              graduation requirements.
            </p>
            <p
              style={{
                color: '#4a5a72',
                lineHeight: 1.8,
                marginBottom: 28,
                fontSize: 15,
              }}
            >
              Our letter explains why a longer, integrated approach matters:
              students need time to understand budgeting, compound interest,
              credit, debt, and long-term wealth-building habits in ways they
              can actually apply beyond the classroom.
            </p>

            <div
              style={{
                ...cardStyle,
                padding: '28px 30px',
                background: '#0a1628',
                color: '#fff',
              }}
            >
              <div
                style={{
                  color: '#5bc4f0',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}
              >
                Advocacy Focus
              </div>
              <p
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  lineHeight: 1.7,
                  margin: '0 0 22px',
                  fontSize: 14,
                }}
              >
                The letter respectfully requests an "Aye" vote from state
                legislators as SB 1147 moves through the legislative process.
              </p>
              <a
                href={pdfPath}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: '#17a2d8',
                  color: '#fff',
                  padding: '12px 20px',
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Open Letter
              </a>
            </div>
          </div>

          <div style={{ ...cardStyle, overflow: 'hidden' }}>
            <div
              style={{
                padding: '20px 24px',
                borderBottom: '1px solid #e8edf5',
                display: 'flex',
                justifyContent: 'space-between',
                gap: 16,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    color: '#0a1628',
                    marginBottom: 4,
                  }}
                >
                  Letter of Advocacy
                </div>
                <div style={{ color: '#7a8ca8', fontSize: 13 }}>
                  The Financial Initiative's statement of support for SB 1147
                </div>
              </div>
              <a
                href={pdfPath}
                download
                style={{
                  color: '#17a2d8',
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                Download PDF
              </a>
            </div>
            <object
              data={pdfPath}
              type="application/pdf"
              className="legal-pdf-viewer"
              aria-label="Letter of Advocacy PDF"
              style={{
                width: '100%',
                height: 720,
                border: 0,
                display: 'block',
                background: '#eef3f8',
              }}
            >
              <div style={{ padding: 32, color: '#4a5a72', lineHeight: 1.7 }}>
                This browser cannot display embedded PDFs.{' '}
                <a href={pdfPath} style={{ color: '#17a2d8', fontWeight: 700 }}>
                  Open the letter in a new tab.
                </a>
              </div>
            </object>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
