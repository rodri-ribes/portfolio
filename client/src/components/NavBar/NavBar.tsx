import { useEffect, useRef, useState } from 'react'
import style from './NavBar.module.scss'
import usePageSetting from '../../hooks/usePageSetting'
import { handleOnMode } from './functions/handleOnMode'
import { Options } from '../../types/options'
import { handleClick } from './functions/handleClick'

import { useTranslation } from 'react-i18next'

import Typed from 'typed.js'
// import ToggleDarkMode from '../ToggleDarkMode/ToggleDarkMode'

const NavBar = (): JSX.Element => {
  const { setting } = usePageSetting()

  const [translation] = useTranslation('global')

  const present = useRef(null)

  const [darkMode, setDarkMode] = useState<boolean>((): boolean => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.querySelector('body')?.setAttribute('data-theme', 'dark')
      return true
    } else {
      document.querySelector('body')?.setAttribute('data-theme', 'ligth')
      return false
    }
  })

  const [options, setOptions] = useState<Options>({
    search: false,
    mobile: false,
    menu: false,
    shoppingCart: false
  })

  useEffect(() => {
    const typed = new Typed(present.current, {
      strings: ['Full Stack', 'Front End', 'Back End'],
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 200,
      smartBackspace: true,
      showCursor: false,
      shuffle: false,
      backDelay: 1500,
      loop: true
      // cursorChar: "|",
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <header className={style.header}>
        <div className={style.header__left}>
          <h2>{translation('header.hi')}</h2>
          <h3>
            {translation('header.developer') === 'Desarrollador' &&
              ' Desarrollador '}
            <span ref={present}></span>
            {translation('header.developer') === 'Developer' && ' Developer '}
          </h3>
          <div className={style.header__left__buttons}>
            <a
              href="#about"
              className={'buttonDefault'}
              data-aos={'fade-up'}
              data-aos-duration={2000}
            >
              {translation('header.btn-read-about')}
            </a>
            <a
              href="#portfolio"
              className={'buttonTwo'}
              data-aos={'fade-up'}
              data-aos-duration={3000}
            >
              {translation('header.btn-see-projects')}
            </a>
          </div>
        </div>
        <div className={style.header__right}>
          <img src="/img/vector.png" alt="logo" />
        </div>
      </header>
      <nav className={style.container}>
        <div className={style.container__wrapper}>
          <button
            onClick={() => {
              handleClick('mobile', options.mobile, setOptions)
            }}
            className={`${style.container__wrapper_mobile} ${
              options.search && style.container__wrapper_searchActive
            }`}
            name="mobile"
          >
            <i
              className={`${options?.mobile ? 'bi bi-x-lg' : 'bi bi-list'}`}
            ></i>
          </button>
          <a
            className={`${style.container__wrapper_logo} ${
              options.search && style.container__wrapper_searchActive
            }`}
            href="#home"
          >
            {setting.name_of_the_page}
          </a>
          <ul
            className={style.container__wrapper__menu}
            style={{ left: `${options.mobile ? '0' : '-100%'}` }}
          >
            <li>
              <a href="#about">{translation('navbar.about')}</a>
            </li>
            <li>
              <a href="#services">{translation('navbar.service')}</a>
            </li>
            <li>
              <a href="#skills">{translation('navbar.skills')}</a>
            </li>
            <li>
              <a href="#portfolio">{translation('navbar.portfolio')}</a>
            </li>
            <li>
              <a href="#contact">{translation('navbar.contact')}</a>
            </li>
          </ul>
          <div className={style.container__wrapper__items}>
            {/* <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode} /> */}
            <button
              onClick={() => {
                handleOnMode(setDarkMode)
              }}
            >
              <i
                id="shoppingCart"
                className={`bi bi-${darkMode ? 'moon' : 'sun'}`}
              ></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
