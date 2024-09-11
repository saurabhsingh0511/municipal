import './Button.css'

const Button = ({buttonName, type, bootIcon}) => {
  return (
    <div><button className={`btn ${type} master_btn`}>{bootIcon}{buttonName}</button></div>
  )
}

export default Button