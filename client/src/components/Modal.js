import { useEffect } from 'react'

/* eslint-disable react/prop-types */
const Modal = ({ open, onClose, children }) => {
  const escHandler = ({ key }) => {
    if (key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', escHandler)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', escHandler)
      }
    }
  }, [])
  return (
    <div className={`fixed inset-0 z-20 ${open ? '' : 'pointer-events-none'}`}>
      {/* backdrop */}
      {/* eslint-disable-next-line  jsx-a11y/control-has-associated-label */}
      <button
        type='button'
        className={`fixed inset-0 bg-gray-light dark:bg-dark-light ${
          open ? 'opacity-50' : 'pointer-events-none opacity-0'
        } transition-opacity duration-600 ease-in-out `}
        onClick={onClose}
      />
      <div
        className={`fixed right-0 h-full  shadow-lg w-full bg-gray-light max-w-sm p-4 dark:bg-dark-light ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        } transition-opacity duration-600 ease-in-out`}
      >
        {children}
      </div>
    </div>
  )
}
export default Modal
