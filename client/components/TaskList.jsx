import React from 'react'
import {TaskListItem} from './TaskListItem'

export function TaskList({tasks, check}){
  return (
    <>
    {tasks && tasks.map(task=><TaskListItem key={task.taskId} task={task} tasks={tasks} check={check}/>)}
    </>
    
  )
}