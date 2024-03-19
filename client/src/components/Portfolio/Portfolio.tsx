//------ Imports
import { useState } from 'react'
import style from './portfolio.module.scss'

//------ Components
import CardProject, { ProjectCard } from './CardProject/CardProject'
import Modal from '../Modal/Modal'

//------ Functions and Arrays
import { category, technology } from './functions/filters'
import filterProject from './functions/filterProject'
import apps from './functions/apps'
import { useTranslation } from 'react-i18next'

function Portfolio() {
  const [translation] = useTranslation('global')

  const [modal, setModal] = useState<{
    data: ProjectCard | null
    show: boolean
  }>({
    data: null,
    show: false
  })

  const [term, setTerm] = useState<{
    technology: string
    category: string
  }>({
    technology: '',
    category: ''
  })

  const handleOnChange = (name: string, value: string) => {
    setTerm((prev) => ({
      ...prev,
      [name]: prev[name] === value ? '' : value
    }))
  }

  return (
    <div className={style.container} id="portfolio">
      <h3>{translation('navbar.portfolio')}</h3>
      <div className={style.container__filter}>
        <p>{translation('filter.filterbycategory')}</p>
        <div className={style.container__filter__group}>
          {category(translation).map((f, i) => {
            return (
              <button
                name="category"
                value={f}
                onClick={() => handleOnChange('category', f)}
                key={i}
                className={`${
                  f === term.category ? 'buttonDefault' : 'buttonTwo'
                }`}
              >
                {f}
              </button>
            )
          })}
        </div>
        <p>{translation('filter.filterbytechnology')}</p>
        <div className={style.container__filter__group}>
          {technology(translation).map((f, i) => {
            return (
              <button
                name="technology"
                value={f}
                onClick={() => handleOnChange('technology', f)}
                key={i}
                className={`${
                  term.technology.includes(f) ? 'buttonDefault' : 'buttonTwo'
                }`}
              >
                {f}
              </button>
            )
          })}
        </div>
      </div>
      <div className={style.container__projects}>
        {apps(translation)?.filter(filterProject(term))?.length > 0 ? (
          apps(translation)
            ?.filter(filterProject(term))
            ?.map((e, i) => {
              return (
                <CardProject
                  key={i}
                  title={e.title}
                  technology={e.technology}
                  img={e.img}
                  linkDeploy={e.linkDeploy}
                  linkGithub={e.linkGithub}
                  text={e.text}
                  templateimg={e.templateimg}
                  deployed={e.deployed}
                  images={e.images}
                  type={e.type}
                  setModal={setModal}
                />
              )
            })
        ) : (
          <p className={style.container__projects_error}>
            No se encontró ningún proyecto que coincidiera con los filtros
            seleccionados.
          </p>
        )}
      </div>
      {modal.show && <Modal setModal={setModal} modal={modal} />}
    </div>
  )
}

export default Portfolio
