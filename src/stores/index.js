import { defineStore } from 'pinia'
import actions from './actions'

export const useEstateStore = defineStore('estateStore', {
  state: () => {
    return {
      listings: [],
      regions: [],
      agents: [],
      region_id: JSON.parse(localStorage.getItem('region')) || '',
      cities: [],
      filter: {
        region: false,
        price: false,
        area: false,
        bedrooms: false
      }
    }
  },
  actions
})
