import React, { useState } from 'react'

export function ResourcesListItem({resource}) {
  return (
    <li><a className="list" target="_blank" href={resource.url} rel="noreferrer">{resource.resourceName}</a></li>
  )
}