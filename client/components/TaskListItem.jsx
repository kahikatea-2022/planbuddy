import React, { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUser } from '../actions/user'
import { updateTaskCompletion } from '../apis/tasks'
import { getUsers, updateCurrentTask } from '../apis/users'

export function TaskListItem({ task, check, tasks }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
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
    whatever()
    navigate('/dailylearning/' + taskId)

  }

  function whatever(){
    getUsers().then(data=>{
    dispatch(updateUser({currentTask: data.find(el=>el.userId === user.id).currentTask}))
  })
}
  return (
    user && (
      <li>
        {/* <input
          onChange={() => checkboxHandler(task)}
          type={'checkbox'}
          checked={checked}
        /> */}
        {task.completed ? (
          <strike>
            <span
              className="text-hover"
              onClick={() => goToTaskHandler(task.taskId)}
            >
              {task.taskName}
            </span>
          </strike>
        ) : (
          <span
            className="text-hover"
            onClick={() => goToTaskHandler(task.taskId)}
          >
            {task.taskName}
          </span>
        )}
      </li>
    )
  )
}
