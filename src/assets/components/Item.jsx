import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function Item ({ image, description }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={`item ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="front">
        <img src={image} alt="Item Image" />
      </div>
      <div className="back">
        <p>{description}</p>
      </div>
    </div>
  )
}

