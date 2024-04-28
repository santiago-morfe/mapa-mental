import { useState } from 'react';
import { Map } from './Map';

export function MainMap () {

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [scale, setScale] = useState(50);


  const handleMouseDown = (event) => {
    if (event.button === 0) {
      setIsMouseDown(true);
    }
  }

  const handleMouseUp = (event) => {
    if (event.button === 0) {
      setIsMouseDown(false);
    }
  }

  const handleMove = (event) => {
    if (isMouseDown) {
      const newPosition = {
        x: position.x + event.movementX,
        y: position.y + event.movementY
      }
      setPosition(newPosition)
    }
  }

  const handleChange = (e) => {
    const newValue = e.target.value
    setScale(newValue)
  }


  return (
    <>
      <div
        style={{
          cursor: isMouseDown ? 'grabbing' : 'grab',
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMove}
        onMouseUp={handleMouseUp}
      >
        <div
          style={{
            position: 'absolute',
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: `scale(${(scale/100)})`
          }}
        >
          <Map />
        </div>

      </div>
      <input
        className='scale'
        type="range"
        min="50"
        max="500"
        value={scale}
        onChange={handleChange}
      />
    </>
  )
}