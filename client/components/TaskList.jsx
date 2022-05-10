import React from 'react'
import {TaskListItem} from './TaskListItem'

export function TaskList({tasks}){
  return (
    <>
    {tasks && tasks.map(task=><TaskListItem key={task.taskId} task={task}/>)}
    </>
  )
}