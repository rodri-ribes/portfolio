import style from './FeatureCard.module.scss'

interface Props {
  title: string
  logo: string
  text: string
}
const FeatureCard: React.FC<Props> = ({ title, logo, text }) => {
  return (
    <li className={style.container}>
      <div className={style.container__svg}>
        <i className={logo}></i>
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  )
}

export default FeatureCard
