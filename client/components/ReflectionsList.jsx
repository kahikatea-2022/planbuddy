import React from 'react'
import { ReflectionsListItem } from './ReflectionsListItem'
export function ReflectionsList({reflections}){
  return (
    <>
    {reflections && reflections.map(reflection=><ReflectionsListItem key={reflection.reflectionId} reflection={reflection}/>)}
    </>
  )
}