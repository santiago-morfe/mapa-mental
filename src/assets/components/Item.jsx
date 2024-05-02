import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function Item({ image, description, id }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div 
      id={id}
      className='item' 
      onClick={handleClick}
    >
      <img
        className={`front ${isFlipped ? 'hidden' : ''}`}
        src={image} alt="Item Image"
      />
      <p
        className={`back ${isFlipped ? '' : 'hidden'}`}
      >
        {description}
      </p>
    </div>
  )
}

