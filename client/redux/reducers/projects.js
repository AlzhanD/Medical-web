const initialState = {
  projects: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROJECTS': {
      return { ...state, projects: [...state.projects, action.projects] }
    }
    default:
      return {
        ...state
      }
  }
}

export function setProjects(projects) {
  return { type: 'SET_PROJECTS', projects }
}
