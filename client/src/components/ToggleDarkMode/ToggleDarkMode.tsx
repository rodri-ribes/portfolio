import React, { Dispatch, SetStateAction } from 'react'
import style from './ToggleDarkMode.module.scss'
import { handleOnMode } from '../NavBar/functions/handleOnMode'

interface Props {
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
}

const ToggleDarkMode: React.FC<Props> = ({ darkMode, setDarkMode }) => {
  return (
    <div className={style.container}>
      <input
        type="checkbox"
        id="darkmode-toggle"
        checked={darkMode}
        onChange={() => handleOnMode(setDarkMode)}
      />
      <label htmlFor="darkmode-toggle">
        <svg
          version="1.1"
          className={darkMode ? 'moon' : 'sun'}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 496 496"
        >
          {/* Aquí va el resto del SVG, omitido por brevedad */}
        </svg>
      </label>
    </div>
  )
}

export default ToggleDarkMode
