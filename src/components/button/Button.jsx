import './button.scss'

const Button = ({text, ...props}) => {
    return (
       <button className='button' {...props}>{text}</button>
    )
}

export default Button;