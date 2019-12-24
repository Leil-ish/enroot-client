import React, { Component } from 'react'

export const nullPlant = {
  scientific_names: {},
}

export const nullTask = {
  maintenance_needed: {},
}

const PlantContext = React.createContext({
  plant: nullPlant,
  task: nullTask,
  error: null,
  setError: () => {},
  clearError: () => { },
  setPlant: () => {},
  setTask: () => {},
  clearPlant: () => {},
  setTasks: () => {},
  addTask: () => {},
  addPlant: () => {},
  updatePlant: () => {},
  deleteTask: () => {},
  clearTask: () => {},
})

export default PlantContext

export class PlantProvider extends Component {
  state = {
    plant: nullPlant,
    task: nullTask,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({error})
  }

  clearError = () => {
    this.setState({error: null})
  }

  setPlant = plant => {
    this.setState({plant})
  }

  setTask = task => {
    this.setState({task})
  }

  setTasks = tasks => {
    this.setState({tasks})
  }

  setPlants = plants => {
    this.setState({plants})
  }

  clearPlant = () => {
    this.setPlant(nullPlant)
    this.setTasks([])
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

  addPlant = plant => {
    this.setPlants([
      this.state.plants,
      plant
    ])
  }

  updatePlant = plant => {
    this.setPlants([
      this.state.plants,
      plant
    ])
  }

  render() {
    const value = {
      plant: this.state.plant,
      task: this.state.task,
      tasks: this.state.tasks,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPlant: this.setPlant,
      setTask: this.setTask,
      setTasks: this.setTasks,
      clearPlant: this.clearPlant,
      clearTask: this.clearTask,
      addTask: this.addTask,
      addPlant: this.addPlant,
      deleteTask: this.deleteTask,
      editPlant: this.editPlant,
    }
    return (
      <PlantContext.Provider value={value}>
        {this.props.children}
      </PlantContext.Provider>
    )
  }
}
