import React from 'react'

interface ButtonProps {
    text: string;
    onClick?: any;
    className?: string;
    id?: string;
}

const CCButton:React.FC<ButtonProps> = ({text, onClick, id, className}) => {
  return (
        <button id={id} onClick={onClick} className={`${className} button-54`} role='button'>
            {text}
        </button>
  )
}

export default CCButton;