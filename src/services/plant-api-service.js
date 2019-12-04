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

  getApiPlants() {
    return fetch(`${config.API_ENDPOINT}/trefle`, {
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

  postOrder(plantId, maintenance_needed, frequency, details) {
    return fetch(`${config.API_ENDPOINT}/garden/${plantId}/add-order`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        plant_id: plantId,
        maintenance_needed,
        frequency,
        details
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postPlant(scientific_name, common_name, lifespan, growth_rate, growth_period, temperature_minimum, shade_tolerance, precipitation_minimum, precipitation_maximum, 
    resprout_ability, family_common_name, duration, drought_tolerance, frost_free_days_minimum, 
    moisture_use, user_id, seedling_vigor, flower_color, foliage_color) {
    return fetch(`${config.API_ENDPOINT}/garden`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        scientific_name, common_name, lifespan, growth_rate, growth_period, 
        temperature_minimum, shade_tolerance, precipitation_minimum, precipitation_maximum, 
        resprout_ability, family_common_name, duration, drought_tolerance, frost_free_days_minimum, 
        moisture_use, user_id, seedling_vigor, flower_color, foliage_color
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postCustomPlant(scientific_name, common_name, lifespan, growth_rate, growth_period, 
    temperature_minimum, shade_tolerance, precipitation_minimum, precipitation_maximum, 
    resprout_ability, family_common_name, duration, drought_tolerance, frost_free_days_minimum, 
    moisture_use, user_id, seedling_vigor, flower_color, foliage_color) {
    return fetch(`${config.API_ENDPOINT}/garden/add-plant`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        scientific_name, common_name, lifespan, growth_rate, growth_period, 
        temperature_minimum, shade_tolerance, precipitation_minimum, precipitation_maximum, 
        resprout_ability, family_common_name, duration, drought_tolerance, frost_free_days_minimum, 
        moisture_use, user_id, seedling_vigor, flower_color, foliage_color
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
        'authorization': `bearer ${TokenService.getAuthToken()}`,
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