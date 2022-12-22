import React from 'react'
import "./Button.css"

type Props = {
  value?: string,
  onClick?: (event: MouseEvent) => void
}

const Button: React.FC<Props> = ({value, onClick}) => {
  return (
    <button>
      Saya adalah button
    </button>
  )
}

export default Button