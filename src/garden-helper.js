export const findPlant = (plants=[], gardenId) =>
  plants.find(plant => plant.gardenId === gardenId)

export const findNote = (notes=[], gardenId) =>
  notes.find(note => note.gardenId === gardenId)

export const getNotesForPlant = (notes=[], gardenId) => (
  (!gardenId)
    ? notes
    : notes.filter(note => note.gardenId === gardenId)
)

export const getPlantsForGarden = (plants=[], gardenId) => (
  (!gardenId)
    ? plants
    : plants.filter(plant => plant.gardenId === gardenId)
)

export const countNotesForPlant = (notes=[], gardenId) =>
  notes.filter(note => note.gardenId === gardenId).length