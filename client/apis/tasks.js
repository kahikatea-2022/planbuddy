import request from 'superagent'

const rootUrl = '/api/v1'

// ?get tasks by subgoal id
export function getTask(id) {
  return request
    .get(rootUrl + '/tasks/getTaskById/' + id)
    .then((res) => res.body)
}
export function getTasksBySubGoalId(id) {
  return request
    .get(rootUrl + '/tasks/getTasksBySubGoalId/' + id)
    .then((res) => res.body)
}
export function addNewTask(task) {
  return request
    .post(rootUrl + '/tasks/addNewTask/')
    .send(task)
    .then((res) => res.body)
}
export function updateTaskCompletion(task, bool) {
  return request
    .patch(rootUrl + '/tasks/updateTaskById/')
    .send({ taskId: task.taskId, completed: bool })
    .then((res) => res.body)
}
