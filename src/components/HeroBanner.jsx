export default function HeroBanner({
  badge,
  title,
  subtitle,
  large = false,
  withGlow = false,
}) {
  return (
    <section
      style={{
        background:
          'linear-gradient(135deg, #0a1628 0%, #0d2347 60%, #1a3a6b 100%)',
        color: '#fff',
        padding: large ? '140px 24px 100px' : '120px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {withGlow && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 60% 40%, rgba(23,162,216,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      )}
      <div
        style={{
          maxWidth: large ? 760 : 700,
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            background: 'rgba(23,162,216,0.15)',
            border: '1px solid rgba(23,162,216,0.4)',
            color: '#5bc4f0',
            borderRadius: 20,
            padding: large ? '6px 18px' : '6px 18px',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: large ? 28 : 24,
          }}
        >
          {badge}
        </span>
        <h1
          style={{
            fontSize: large
              ? 'clamp(2.2rem, 5vw, 3.6rem)'
              : 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            margin: large ? '0 0 28px' : '0 0 20px',
            lineHeight: large ? 1.15 : undefined,
            letterSpacing: large ? '-0.02em' : undefined,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              opacity: 0.75,
              fontSize: large ? 'clamp(1rem, 2vw, 1.2rem)' : '1.1rem',
              lineHeight: 1.7,
              maxWidth: large ? 600 : undefined,
              margin: large ? '0 auto' : undefined,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
