import React, {useState} from 'react'

const Contador = () => {

    const [clicks, setClicks] = useState({left: 0, right: 0});

    const handleLeftClick = () => {
    const newClicks = { left: clicks.left + 1, right: clicks.right }
    setClicks(newClicks)
  }

    const handleRightClick = () => {
    const newClicks = { left: clicks.left, right: clicks.right + 1 }
    setClicks(newClicks)
  }

  return (
    <div>
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
    </div>
  )
}

export default Contador;
