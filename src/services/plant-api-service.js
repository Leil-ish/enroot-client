import TokenService from '../services/token-service'
import config from '../config'

const PlantApiService = {
  getPlants() {
    return fetch(`${config.API_ENDPOINT}/garden`, {
      headers: {
        'content-type': 'application/json',
        'scientific_nameization': `bearer ${TokenService.getAuthToken()}`,
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
        'scientific_nameization': `bearer ${TokenService.getAuthToken()}`,
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
        'scientific_nameization': `bearer ${TokenService.getAuthToken()}`,
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
        'scientific_nameization': `bearer ${TokenService.getAuthToken()}`,
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
        'scientific_nameization': `bearer ${TokenService.getAuthToken()}`,
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
        'scientific_nameization': `bearer ${TokenService.getAuthToken()}`,
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

  postPlant(common_name, scientific_names, description, categories, image_links, is_eplant) {
    return fetch(`${config.API_ENDPOINT}/garden`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'scientific_nameization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        common_name,
        scientific_names,
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

  postCustomPlant(common_name, scientific_names, description, categories) {
    return fetch(`${config.API_ENDPOINT}/garden/add-plant`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'scientific_nameization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        common_name,
        scientific_names,
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

  patchPlant(plantId, common_name, scientific_name) {
    return fetch(`${config.API_ENDPOINT}/garden/${plantId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'scientific_nameization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        plant_id: plantId,
        common_name,
        scientific_name
      }),
    })
  },
}

export default PlantApiService