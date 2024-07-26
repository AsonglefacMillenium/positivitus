import React from 'react'
import styles from "./styles.module.css"


interface ButtonProps{
    text: string
    bgColor: string
    color: string
}
const Button = ({...props}: ButtonProps) => {
  return (
    <button className={styles.btn} style={{
        color: props.color,
        backgroundColor: props.bgColor
    }}>
        {props.text}
    </button>
  )
}

export default Button