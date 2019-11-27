  
export const findPlant = (plants=[], plantId) =>
plants.find(plant => plant.id === plantId)

export const findOrder = (orders=[], orderId) =>
orders.find(order => order.id === orderId)

export const getOrdersForPlant = (orders=[], plantId) => (
(!plantId)
  ? orders
  : orders.filter(order => order.plantId === plantId)
)

export const getPlantsForGarden = (plants=[], plantId) => (
(!plantId)
  ? plants
  : plants.filter(plant => plant.plantId === plantId)
)

export const countOrdersForPlant = (orders=[], plantId) =>
orders.filter(order => order.plantId === plantId).length