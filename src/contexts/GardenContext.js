import React, {Component} from 'react'

const GardenContext = React.createContext({
  plants: [],
  tasks: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setGarden: () => {},
  setTaskList: () => {},
  deletePlant: () => {},
})
export default GardenContext

export class GardenProvider extends Component {
  state = {
    plants: [],
    tasks: [],
    error: null,
  };

  setGarden = plants => {
    this.setState({ plants })
  }

  setTaskList = tasks => {
    this.setState({ tasks })
  }

  deletePlant = plantId => {
    this.setState({
      plants: this.state.plants.filter(plant => plant.id !== plantId)
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
      plants: this.state.plants,
      tasks: this.state.tasks,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGarden: this.setGarden,
      setTaskList: this.setTaskList,
      deletePlant: this.deletePlant,
    }
    return (
      <GardenContext.Provider value={value}>
        {this.props.children}
      </GardenContext.Provider>
    )
  }
}