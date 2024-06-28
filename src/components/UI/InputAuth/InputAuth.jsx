/* eslint-disable react/prop-types */
import styles from './InputAuth.module.css'

const InputAuth = (props) => {
    return (<input className={props.style + ' ' + styles.InputAuth} placeholder={props.placeholder} type={"text"} name={props.name} required={props.required} value={props.value}  />)
}

export default InputAuth