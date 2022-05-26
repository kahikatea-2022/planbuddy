import { format } from 'prettier'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchReflections } from '../actions/reflections'
import { fetchResources } from '../actions/resources'
import { fetchSubGoal } from '../actions/subGoals'
import { fetchTask } from '../actions/tasks'
import { updateTaskCompletion } from '../apis/tasks'
import PlanBuddy from './PlanBuddy'
import { ReflectionsList } from './ReflectionsList'
import { ResourcesList } from './ResourcesList'

function DailyLearning() {
  // TODO Add funcitonality to buddy to accept on the fly reflections
  // pass buddy ?task id?
  const chatter =
    "sweet I'm ready to learn this! A great technique is to time box, set a timer for a length you can manage and then when it is done, take a break"

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const task = useSelector((state) => state.task)
  const subgoal = useSelector((state) => state.subGoal)
  const resources = useSelector((state) => state.resources)
  const reflections = useSelector((state) => state.reflections)
  const { taskid } = useParams()

  const [checkboxState, setCheckboxState] = useState(false)
  useEffect(() => {
    dispatch(fetchTask(Number(taskid)))
    // fetch resources
  }, [checkboxState])
  useEffect(() => {
    dispatch(fetchResources(task.subgoalId))
    dispatch(fetchReflections(task.taskId))
    dispatch(fetchSubGoal(task.subgoalId))
    setCheckboxState(task?.completed || false)
  }, [task])

  function endSessionHandler(call) {
    if (call === 'complete') updateTaskCompletion(task, true)
    navigate('/reflection/' + task.taskId)
  }
  function checkboxHandler(task) {
    setCheckboxState(!checkboxState)
    // console.log(!checkboxState)
    updateTaskCompletion(task, !checkboxState)
  }
  return (
    <>
      <div className="DailyLearning">
        <div className="subGoalCreator">
          <img className="pencilButtonImg" src="/images/Pencil.png"></img>
          <p className="pencilButtonText">{subgoal?.subgoalName}</p>
        </div>
        <p> Today's Task: </p>
        {task && (
          <label>
            {/* <input
              onClick={(e) => checkboxHandler(task)}
              type={'checkbox'}
              defaultChecked={task.completed}
            /> */}
            {task.completed ? (
              <strike>
                <span>{task?.taskName}</span>
              </strike>
            ) : (
              <span>{task?.taskName}</span>
            )}
          </label>
        )}
      </div>
      <div className="dailylearning-buttons">
        {!task.completed && (
          <button
          onClick={(e) => {
            e.preventDefault()
            endSessionHandler('conclude')
          }}
          >
            Conclude Today's Session
          </button>
        )}
        {!task.completed && (
          <button
          onClick={(e) => {
            e.preventDefault()
            endSessionHandler('complete')
          }}
          >
            Mark as Completed
          </button>
        )}
      </div>
      <button
        className={!task.completed ? 'bottom-left' : ''}
        onClick={(e) => {
          e.preventDefault()
          navigate('/subgoal/' + task.subgoalId)
        }}
      >
        Return to Subgoal
      </button>
      {/* refactor into own component */}
      <div className="left1">
        <span>Resources:</span>
        <ul>{<ResourcesList resources={resources} />}</ul>
      </div>
      <div className="left2">
        {/* refactor into own component */}
        <span>Reflections:</span>
        <ul>{<ReflectionsList reflections={reflections} />}</ul>
      </div>
<PlanBuddy id={2} message={chatter} />
      {/* <PlanBuddy /> */}
    </>
  )
}

// need the logic to redirect upon ticking the textbox

export default DailyLearning
