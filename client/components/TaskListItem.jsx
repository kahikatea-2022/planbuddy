import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateTaskCompletion } from '../apis/tasks'
import { updateCurrentTask } from '../apis/users'


export function TaskListItem({task, check, tasks}) {

  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const [checked, setChecked] = useState(task.completed)
  function checkboxHandler(task) {
    setChecked(!checked)
    // console.log(!checkboxState)
    check(tasks)
    updateTaskCompletion(task, !checked)
  }
  function goToTaskHandler(taskId) {
    updateCurrentTask(user.id, taskId)
    navigate('/dailylearning/' + taskId)
  }
  return (
    user && (
      <li>
        <input
          onChange={() => checkboxHandler(task)}
          type={'checkbox'}
          checked={checked}
        />
        <span onClick={() => goToTaskHandler(task.taskId)}>
          {task.taskName}
        </span>
      </li>
    )
  )
}
