import React, { useState } from 'react';

const MouseTest: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 })
  return (
      <p onClick={() => { setPositions({x:2,y:2})}}>{positions.x}</p>
  )
}

export default MouseTest
