import React from 'react'
import { ResourcesListItem } from './ResourcesListItem'
export function ResourcesList({resources}){
  return (
    <>
    {resources && resources.map(resource=><ResourcesListItem key={resource.resourceId} resource={resource}/>)}
    </>
  )
}