interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={className}
      style={{
        fontFamily: 'var(--font-geist), system-ui, sans-serif',
        fontSize: '0.65rem',
        fontWeight: 600,
        letterSpacing: '0.22em',
        textTransform: 'uppercase' as const,
        color: '#B8860B',
      }}
    >
      {children}
    </p>
  )
}

export function GoldRule({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        width: 40,
        height: 3,
        background: 'linear-gradient(90deg, #B8860B, #C4600A)',
        borderRadius: 2,
      }}
      aria-hidden="true"
    />
  )
}
