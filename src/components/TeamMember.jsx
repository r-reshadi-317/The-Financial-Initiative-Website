export default function TeamMember({ member, reverse = false }) {
  return (
    <article
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 48,
        alignItems: 'center',
        direction: reverse ? 'rtl' : 'ltr',
      }}
    >
      <div style={{ direction: 'ltr' }}>
        <div
          style={{
            aspectRatio: '1',
            maxWidth: 320,
            margin: reverse ? '0 0 0 auto' : '0 auto 0 0',
            borderRadius: 18,
            overflow: 'hidden',
            border: '1px solid #d1d5db',
            boxShadow: '0 8px 32px rgba(10,22,40,0.08)',
          }}
        >
          <img
            src={member.photo}
            alt={member.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </div>

      <div style={{ direction: 'ltr' }}>
        <h3
          style={{
            fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
            fontWeight: 800,
            marginBottom: 8,
          }}
        >
          {member.name}
        </h3>
        <div
          style={{
            color: '#17a2d8',
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          {member.role}
        </div>
        <p
          style={{
            color: '#4a5a72',
            lineHeight: 1.8,
            fontSize: 16,
          }}
        >
          {member.bio}
        </p>
      </div>
    </article>
  );
}
