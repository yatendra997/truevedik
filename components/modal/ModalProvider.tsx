'use client'

import React, { createContext, useCallback, useContext, useState } from 'react'
import dynamic from 'next/dynamic'

const ConsultationModal = dynamic(() => import('./ConsultationModal'), { ssr: false })

/* ─── Context ─────────────────────────────────────────────── */

interface ModalContextValue {
  openModal: () => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}

/* ─── Provider ────────────────────────────────────────────── */

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => {
    setIsOpen(true)
    document.body.classList.add('modal-open')
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    document.body.classList.remove('modal-open')
  }, [])

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && <ConsultationModal onClose={closeModal} />}
    </ModalContext.Provider>
  )
}
