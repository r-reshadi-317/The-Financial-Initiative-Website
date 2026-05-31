export function DollarIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

export function LogoMark({ boxSize = 36, iconSize = 20, borderRadius = 8 }) {
  return (
    <div
      style={{
        width: boxSize,
        height: boxSize,
        background: '#17a2d8',
        borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <DollarIcon size={iconSize} />
    </div>
  );
}
