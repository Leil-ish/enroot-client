  
export const findPlant = (plants=[], plantId) =>
plants.find(plant => plant.id === plantId)

export const findTask = (tasks=[], taskId) =>
tasks.find(task => task.id === taskId)

export const getTasksForPlant = (tasks=[], plantId) => (
(!plantId)
  ? tasks
  : tasks.filter(task => task.plantId === plantId)
)

export const getPlantsForGarden = (plants=[], plantId) => (
(!plantId)
  ? plants
  : plants.filter(plant => plant.plantId === plantId)
)

export const countTasksForPlant = (tasks=[], plantId) =>
tasks.filter(task => task.plantId === plantId).length