import { type Dispatch, type SetStateAction } from 'react'

export function handleOnMode(setDarkMode: Dispatch<SetStateAction<boolean>>): void {
    if (document.querySelector('body')?.getAttribute('data-theme') === 'dark') {
      document.querySelector('body')?.setAttribute('data-theme', 'ligth')
      setDarkMode(false)
    } else {
      document.querySelector('body')?.setAttribute('data-theme', 'dark')
      setDarkMode(true)
    }
  }