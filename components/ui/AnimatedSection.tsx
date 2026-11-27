import type { CSSProperties } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'none'
  style?: CSSProperties
}

/** Keeps section content visible immediately; interaction animations remain local to their controls. */
export function AnimatedSection({ children, className, style }: AnimatedSectionProps) {
  return <div className={className} style={style}>{children}</div>
}

export function AnimatedGroup({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
}) {
  return <div className={className}>{children}</div>
}
