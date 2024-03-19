import { IconType } from 'react-icons'
import style from './CardSkill.module.scss'

interface Data {
  name: string
  logo: IconType
}

interface Props {
  data: Data[]
  text: string
  animacion: string
  duration: string
  image: string
  position: string
}

const CardSkill: React.FC<Props> = ({
  data,
  text,
  animacion,
  duration,
  image,
  position
}): JSX.Element => {
  return (
    <div
      data-aos={animacion}
      data-aos-duration={duration}
      className={style.container}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: `${position}`
      }}
    >
      <div className={style.container__wrapper}>
        <h4>{text}</h4>
        <div className={style.container__wrapper__content}>
          {data.map((p, i) => {
            return (
              <div className={style.container__wrapper__content__group} key={i}>
                <p.logo />
                <p>{p.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CardSkill
