import React from 'react'
import style from './Card.module.css'

interface IProps {
    section: string,
  }

const Card:React.FC<IProps> = ({section}) => {
    return (
        <div className={style.container}>
            {section}
        </div>
    )
}

export default Card
