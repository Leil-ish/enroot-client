import React, {Component} from 'react'

export const nullTask = {
  maintenance_needed: {},
}

export const nullPlant = {
  scientific_name: {},
}

const GardenContext = React.createContext({
  plant: nullPlant,
  task: nullTask,
  plants: [],
  tasks: [],
  error: null,
  setPlant: () => {},
  clearPlant: () => {},
  setError: () => {},
  clearError: () => {},
  setGarden: () => {},
  setTaskList: () => {},
  deletePlant: () => {},
  setTasks: () => {},
  addTask: () => {},
  deleteTask: () => {},
  clearTask: () => {},
})
export default GardenContext

export class GardenProvider extends Component {
  state = {
    plants: [],
    tasks: [],
    plant: nullPlant,
    task: nullTask,
    error: null,
  };

  setGarden = plants => {
    this.setState({ plants })
  }

  setPlant = plant => {
    this.setState({plant})
  }

  clearPlant = () => {
    this.setPlant(nullPlant)
    this.setTasks([])
  }

  setTaskList = tasks => {
    this.setState({ tasks })
  }

  deletePlant = plantId => {
    this.setState({
      plants: this.state.plants.filter(plant => plant.id !== plantId)
    })
  }

  setTask = task => {
    this.setState({task})
  }

  setTasks = tasks => {
    this.setState({tasks})
  }

  clearTask = () => {
    this.setTask(nullTask)
    this.setTasks([])
  }

  addTask = task => {
    this.setTasks([
      ...this.state.tasks,
      task
    ])
  }

  deleteTask = taskId => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== taskId)
    })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      plant: this.state.plant,
      plants: this.state.plants,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGarden: this.setGarden,
      setPlant: this.setPlant,
      clearPlant: this.clearPlant,
      setTaskList: this.setTaskList,
      deletePlant: this.deletePlant,
      task: this.state.task,
      tasks: this.state.tasks,
      setTask: this.setTask,
      setTasks: this.setTasks,
      clearTask: this.clearTask,
      addTask: this.addTask,
      deleteTask: this.deleteTask,
    }
    return (
      <GardenContext.Provider value={value}>
        {this.props.children}
      </GardenContext.Provider>
    )
  }
}