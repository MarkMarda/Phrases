import React from 'react'
import Button from './Button'

const Phrases = ({quoteRandom, clickButton, colorRandom}) => {
  const stylePhrase = {color: colorRandom};

  const styleButton = {backgroundColor: colorRandom};

  return (
    <article className='phrases' style={stylePhrase}>
      <h2>{quoteRandom.quote}</h2>
      <h4>{quoteRandom.author}</h4>
      <Button styleButton={styleButton} clickButton={clickButton}/>
    </article>
  )
}

export default Phrases