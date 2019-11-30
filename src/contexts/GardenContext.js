import React, {Component} from 'react'

const GardenContext = React.createContext({
  plants: [],
  orders: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setGarden: () => {},
  setOrderList: () => {},
  deletePlant: () => {},
})
export default GardenContext

export class GardenProvider extends Component {
  state = {
    plants: [],
    orders: [],
    error: null,
  };

  setGarden = plants => {
    this.setState({ plants })
  }

  setOrderList = orders => {
    this.setState({ orders })
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
      orders: this.state.orders,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGarden: this.setGarden,
      setOrderList: this.setOrderList,
      deletePlant: this.deletePlant,
    }
    return (
      <GardenContext.Provider value={value}>
        {this.props.children}
      </GardenContext.Provider>
    )
  }
}