export default function goals(state = [], action) {
  switch (action.type) {
    // Some of the reducers import action types as strings and some do not.
    // Also, this seemes to be themed by the singular vs plural naming
    // of files and actions eg. goal vs goals. Is this duplication intentional?
    case 'SET_GOALS':
      return action.goals
    case 'ADD_GOAL':
      return [...state, action.goal]
    default:
      return state
  }
}
