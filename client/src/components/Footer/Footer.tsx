// import usePageSetting from '../../hooks/usePageSetting'
import style from './Footer.module.scss'
import Contact from '../Contact/Contact'

const Footer = (): JSX.Element => {
  // const { setting } = usePageSetting()

  return (
    <footer className={style.container}>
      <Contact />
      <div className={style.container__copy}>
        <p>Rodrigo Ribes Dev.</p>
      </div>
    </footer>
  )
}

export default Footer
