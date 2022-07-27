import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'

const Button = ({styleButton, clickButton}) => {
  return (
    <button className='button' style={styleButton} onClick={clickButton}>
      <FontAwesomeIcon icon={faBookOpenReader} />
    </button>
  )
}

export default Button