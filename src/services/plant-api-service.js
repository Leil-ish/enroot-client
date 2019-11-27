import TokenService from '../services/token-service'
import config from '../config'

const PlantApiService = {
  getPlants() {
    return fetch(`${config.API_ENDPOINT}/garden`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getPlant(plantId) {
    return fetch(`${config.API_ENDPOINT}/garden/${plantId}`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getOrder(plantId, orderId) {
    return fetch(`${config.API_ENDPOINT}/garden/${plantId}/orders/${orderId}`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getAllOrders() {
    return fetch(`${config.API_ENDPOINT}/orders`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getPlantOrders(plantId) {
    return fetch(`${config.API_ENDPOINT}/garden/${plantId}/orders`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postOrder(plantId, content, order_name) {
    return fetch(`${config.API_ENDPOINT}/garden/${plantId}/add-order`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        plant_id: plantId,
        content,
        order_name,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postPlant(title, authors, description, categories, image_links, is_eplant) {
    return fetch(`${config.API_ENDPOINT}/garden`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        title,
        authors,
        description,
        categories,
        image_links,
        is_eplant,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postCustomPlant(title, authors, description, categories) {
    return fetch(`${config.API_ENDPOINT}/garden/add-plant`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        title,
        authors,
        description,
        categories,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  patchPlant(plantId, rating, borrowed) {
    return fetch(`${config.API_ENDPOINT}/garden/${plantId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        plant_id: plantId,
        rating,
        borrowed
      }),
    })
  },
}

export default PlantApiService