import './Button.css'

const Button = ({buttonName, type, bootIcon ,onClick}) => {
  return (
    <button className={`btn ${type} master_btn`} onClick={onClick}>{bootIcon}{buttonName}</button>
  )
}

export default Button;