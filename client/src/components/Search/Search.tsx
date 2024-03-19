import { useState } from 'react'
import style from './Search.module.scss'

const Search = (): JSX.Element => {
  const [search, setSearch] = useState<string>('')

  const handleOnSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }
  return (
    <div className={style.container}>
      <form
        onSubmit={(e) => {
          handleOnSearch(e)
        }}
        className={style.container__input}
      >
        <i className={`bi bi-search ${style.container__input_search}`}></i>
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          value={search}
        />
        {search?.length > 0 && (
          <button
            type="button"
            onClick={() => {
              setSearch('')
            }}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        )}
      </form>
    </div>
  )
}

export default Search
