export const findPlant = (plants=[], gardenId) =>
  plants.find(plant => plant.gardenId === gardenId)

export const findOrder = (orders=[], gardenId) =>
  orders.find(order => order.gardenId === gardenId)

export const getOrdersForPlant = (orders=[], gardenId) => (
  (!gardenId)
    ? orders
    : orders.filter(order => order.gardenId === gardenId)
)

export const getPlantsForGarden = (plants=[], gardenId) => (
  (!gardenId)
    ? plants
    : plants.filter(plant => plant.gardenId === gardenId)
)

export const countOrdersForPlant = (orders=[], gardenId) =>
  orders.filter(order => order.gardenId === gardenId).length