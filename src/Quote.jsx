import './Quote.css'
import quotes from './json/quotes.json'
import { useState } from 'react'
import Phrases from './components/Phrases'

const arrayColors = [
  "#1cd82cc9", "#1cbcd8c9", "#1c1fd8c9", "#1c5961c9", "#ca2894a1", "8cca28a1", "#288fcaa1", "#ca28bca1", "#497a5d83", "#4d7a4983", "#11380d83", "#69092183", "#24690983", "#25a39983"
];

function Quote() {
  const createIndex = array => {
    return Math.floor(Math.random() * array.length) 
  }
  
  const getElementRandom = array => {
    const i = createIndex(array);
    return array[i]
  }

  const [quoteRandom, setQuoteRandom] = useState(getElementRandom(quotes));

  const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColors));

  const clickButton = () => {
    setQuoteRandom(getElementRandom(quotes));
    setColorRandom(getElementRandom(arrayColors))
  }

  const styleColor = {backgroundColor: colorRandom}

  return (
    <div className='quote' style={styleColor}>
      <Phrases 
      quoteRandom={quoteRandom}
      colorRandom={colorRandom}
      clickButton={clickButton}
      />
    </div>
  )
}

export default Quote
