'use client'

import { useModal } from '@/components/modal/ModalProvider'
import { cn } from '@/lib/utils'

interface CTAButtonProps {
  label: string
  variant?: 'primary' | 'ghost' | 'whatsapp'
  className?: string
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

export function CTAButton({
  label,
  variant = 'primary',
  className,
  size = 'md',
  href,
}: CTAButtonProps) {
  const { openModal } = useModal()

  const sizeStyles: Record<string, string> = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-7 py-3 text-xs',
    lg: 'px-9 py-3.5 text-sm',
  }

  const baseStyle: React.CSSProperties = {
    fontFamily: 'var(--font-geist), system-ui, sans-serif',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.25s ease',
    fontWeight: 500,
    border: 'none',
  }

  if (href) {
    const opensNewTab = /^https?:\/\//.test(href)

    return (
      <a
        href={href}
        target={opensNewTab ? '_blank' : undefined}
        rel={opensNewTab ? 'noopener noreferrer' : undefined}
        className={cn('group', sizeStyles[size], className)}
        style={{
          ...baseStyle,
          background: '#25D366',
          color: '#fff',
          borderRadius: '4px',
          textDecoration: 'none',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {label}
      </a>
    )
  }

  if (variant === 'ghost') {
    return (
      <button
        onClick={openModal}
        className={cn('group', sizeStyles[size], className)}
        style={{
          ...baseStyle,
          color: '#B8860B',
          border: '1.5px solid rgba(184,134,11,0.5)',
          background: 'transparent',
          borderRadius: '4px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#B8860B'
          e.currentTarget.style.background = 'rgba(184,134,11,0.06)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(184,134,11,0.5)'
          e.currentTarget.style.background = 'transparent'
        }}
      >
        {label}
        <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
      </button>
    )
  }

  return (
    <button
      onClick={openModal}
      className={cn('group', sizeStyles[size], className)}
      style={{
        ...baseStyle,
        color: '#FFFFFF',
        background: 'linear-gradient(135deg, #C4600A, #D4750C)',
        borderRadius: '4px',
        boxShadow: '0 4px 16px rgba(196,96,10,0.3)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #B05509, #C4600A)'
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(196,96,10,0.4)'
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #C4600A, #D4750C)'
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(196,96,10,0.3)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {label}
      <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
    </button>
  )
}
