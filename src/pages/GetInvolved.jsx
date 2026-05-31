import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import { CONTACT_EMAIL } from '../data/programs';

const involvementOptions = [
  {
    icon: '🎓',
    title: 'Attend a Workshop',
    desc: 'Free financial literacy sessions open to all students. No sign-up fees, no strings attached.',
    action: 'Request a session',
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: '🤝',
    title: 'Volunteer',
    desc: "Help us expand our reach. We're always looking for passionate people to help plan, present, and grow.",
    action: 'Join the team',
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: '🏫',
    title: 'Bring Us to Your School',
    desc: "Are you an educator or administrator? We'll customize a session for your students at no cost.",
    action: 'Book a session',
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: '🌐',
    title: 'Partner With Us',
    desc: 'Organizations aligned with our mission can amplify impact through formal partnerships.',
    action: 'Become a partner',
    href: `mailto:${CONTACT_EMAIL}`,
  },
];

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  border: '1.5px solid #d0daea',
  borderRadius: 8,
  fontSize: 14,
  color: '#0a1628',
  outline: 'none',
  background: '#fff',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};

export default function GetInvolved() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    org: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}
Email: ${form.email}
Organization: ${form.org}

${form.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Get Involved - ${form.name}`)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <HeroBanner
        badge="Join Us"
        title="Get Involved"
        subtitle="Whether you're a student, educator, or organization — there's a place for you in our mission."
      />

      <section style={{ padding: '80px 24px', background: '#f7f9fc' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
              marginBottom: 64,
            }}
          >
            {involvementOptions.map((option) => (
              <div
                key={option.title}
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  padding: '32px 28px',
                  border: '1px solid #e8edf5',
                  boxShadow: '0 2px 12px rgba(10,22,40,0.06)',
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 16 }}>{option.icon}</div>
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    marginBottom: 10,
                  }}
                >
                  {option.title}
                </h3>
                <p
                  style={{
                    color: '#4a5a72',
                    fontSize: 14,
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  {option.desc}
                </p>
                <a
                  href={option.href}
                  style={{
                    color: '#17a2d8',
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: 'none',
                  }}
                >
                  {option.action} →
                </a>
              </div>
            ))}
          </div>

          <div
            style={{
              maxWidth: 600,
              margin: '0 auto',
              background: '#fff',
              borderRadius: 20,
              padding: '48px 40px',
              boxShadow: '0 4px 32px rgba(10,22,40,0.1)',
              border: '1px solid #e8edf5',
            }}
          >
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                marginBottom: 8,
                textAlign: 'center',
              }}
            >
              Send Us a Message
            </h2>
            <p
              style={{
                color: '#4a5a72',
                textAlign: 'center',
                marginBottom: 32,
                fontSize: 14,
              }}
            >
              We'd love to hear from you. Expect a response within 48 hours.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontWeight: 700 }}>Message Sent!</h3>
                <p style={{ color: '#4a5a72', fontSize: 14 }}>
                  We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 16,
                  }}
                  className="form-row"
                >
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: 13,
                        fontWeight: 600,
                        marginBottom: 6,
                        color: '#0a1628',
                      }}
                    >
                      Name *
                    </label>
                    <input
                      required
                      style={inputStyle}
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: 13,
                        fontWeight: 600,
                        marginBottom: 6,
                        color: '#0a1628',
                      }}
                    >
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      style={inputStyle}
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 13,
                      fontWeight: 600,
                      marginBottom: 6,
                      color: '#0a1628',
                    }}
                  >
                    Organization
                  </label>
                  <input
                    style={inputStyle}
                    placeholder="School, company, or group (optional)"
                    value={form.org}
                    onChange={(e) =>
                      setForm({ ...form, org: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 13,
                      fontWeight: 600,
                      marginBottom: 6,
                      color: '#0a1628',
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder="How would you like to get involved?"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: '#17a2d8',
                    color: '#fff',
                    border: 'none',
                    padding: '14px 24px',
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: 'pointer',
                    marginTop: 8,
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 520px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </PageLayout>
  );
}
