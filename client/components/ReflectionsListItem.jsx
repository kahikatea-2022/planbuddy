import React, { useState } from 'react'

export function ReflectionsListItem({reflection}) {
  const [showReflection, setShowReflection] = useState(false)
  function clickHandler(){
    setShowReflection(!showReflection)
  }
  return (
    <li className={'unselectable'} onClick={clickHandler} key={reflection.reflection + reflection.reflectionId}>
      {showReflection?reflection.reflection:reflection.reflection.slice(0, 15) + '...'}
    </li>
  )
}