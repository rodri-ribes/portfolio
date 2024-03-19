import { type Dispatch, type SetStateAction } from 'react'
import { Options } from '../../../types/options'


export const handleClick = (name: string, value: boolean, setOptions: Dispatch<SetStateAction<Options>>): void => {
    if (name === 'search' || name === 'menu') {
      setOptions((prev) => ({
        ...prev,
        [name]: !value,
        mobile: false
      }))
    } else {
      setOptions((prev) => ({
        ...prev,
        [name]: !value
      }))
    }
    if (name === 'mobile') {
      document.querySelector('body')?.getAttribute('class') === 'scroll'
        ? document.querySelector('body')?.removeAttribute('class')
        : document.querySelector('body')?.setAttribute('class', 'scroll')
    }
  }