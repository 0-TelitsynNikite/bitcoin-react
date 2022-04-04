import './input.scss'

const Input = ({label, placeholder, changeValue}) => {
    return (
        <div className='input-wrapper'>
            <label>{label}</label>
            <input type="text" onChange={(e) => changeValue(e)} placeholder={placeholder}/>
        </div>
    )
}

export default Input;