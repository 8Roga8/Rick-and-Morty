import { useRef } from "react"
import './styles/FormSearch.css'

const FormSearch = ({setInputLocation}) => {

    const inputSearch = useRef()

    const handelsSumit = e => {
        e.preventDefault()
        setInputLocation(inputSearch.current.value.trim())
        inputSearch.current.value = ''
    }

  return (
    <form className="form" onSubmit={handelsSumit}>
        <input className="form_input" ref={inputSearch} type="text" />
        <button className="form_btn">Search</button>
    </form>
  )
}

export default FormSearch