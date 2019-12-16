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
    return fetch(`${config.API_ENDPOINT}/garden/trefle`, {
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

  postOrder(plantId, maintenance_needed, frequency, modified, details) {
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
        modified,
        details
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postPlant(common_name, scientific_name, lifespan, growth_rate, growth_period, 
            temperature_minimum, shade_tolerance, precipitation_minimum, precipitation_maximum, 
            resprout_ability, family_common_name, duration, drought_tolerance, frost_free_days_minimum, 
            moisture_use, seedling_vigor, flower_color, foliage_color) {
    return fetch(`${config.API_ENDPOINT}/garden`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        common_name, scientific_name, lifespan, growth_rate, growth_period, 
        temperature_minimum, shade_tolerance, precipitation_minimum, precipitation_maximum, 
        resprout_ability, family_common_name, duration, drought_tolerance, frost_free_days_minimum, 
        moisture_use, seedling_vigor, flower_color, foliage_color
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postCustomPlant(common_name) {
    return fetch(`${config.API_ENDPOINT}/garden/add-plant`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        common_name
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  patchPlant(plantId, scientific_name, lifespan, growth_rate, growth_period, 
    temperature_minimum, shade_tolerance, precipitation_minimum, precipitation_maximum, 
    resprout_ability, family_common_name, duration, drought_tolerance, frost_free_days_minimum, 
    moisture_use, seedling_vigor, flower_color, foliage_color) {
    return fetch(`${config.API_ENDPOINT}/garden/${plantId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        plant_id: plantId,
        scientific_name, lifespan, growth_rate, growth_period, 
        temperature_minimum, shade_tolerance, precipitation_minimum, precipitation_maximum, 
        resprout_ability, family_common_name, duration, drought_tolerance, frost_free_days_minimum, 
        moisture_use, seedling_vigor, flower_color, foliage_color
      }),
    })
  },
}

export default PlantApiService