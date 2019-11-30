import React, { Component } from 'react'

export const nullPlant = {
  authors: {},
}

export const nullOrder = {
  order_name: {},
}

const PlantContext = React.createContext({
  plant: nullPlant,
  order: nullOrder,
  error: null,
  setError: () => {},
  clearError: () => { },
  setPlant: () => {},
  setOrder: () => {},
  clearPlant: () => {},
  setOrders: () => {},
  addOrder: () => {},
  addPlant: () => {},
  updatePlant: () => {},
  deleteOrder: () => {},
  clearOrder: () => {},
})

export default PlantContext

export class PlantProvider extends Component {
  state = {
    plant: nullPlant,
    order: nullOrder,
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

  setOrder = order => {
    this.setState({order})
  }

  setOrders = orders => {
    this.setState({orders})
  }

  setPlants = plants => {
    this.setState({plants})
  }

  clearPlant = () => {
    this.setPlant(nullPlant)
    this.setOrders([])
  }

  clearOrder = () => {
    this.setOrder(nullOrder)
    this.setOrders([])
  }

  addOrder = order => {
    this.setOrders([
      ...this.state.orders,
      order
    ])
  }

  deleteOrder = orderId => {
    this.setState({
      orders: this.state.orders.filter(order => order.id !== orderId)
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
      order: this.state.order,
      orders: this.state.orders,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPlant: this.setPlant,
      setOrder: this.setOrder,
      setOrders: this.setOrders,
      clearPlant: this.clearPlant,
      clearOrder: this.clearOrder,
      addOrder: this.addOrder,
      addPlant: this.addPlant,
      deleteOrder: this.deleteOrder,
      editPlant: this.editPlant,
    }
    return (
      <PlantContext.Provider value={value}>
        {this.props.children}
      </PlantContext.Provider>
    )
  }
}
