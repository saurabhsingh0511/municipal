import './Button.css'

const Button = ({buttonName, type, bootIcon}) => {
  return (
    <><button className={`btn ${type} master_btn`}>{bootIcon}{buttonName}</button></>
  )
}

export default Button