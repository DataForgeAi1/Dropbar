import { useState, useEffect } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  const toggleDarkMode = () => {
    // Disabled: lock to dark mode
    setIsDark(true)
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }

  return { isDark, toggleDarkMode }
}