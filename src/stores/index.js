import { defineStore } from 'pinia'
import actions from './actions'

export const useEstateStore = defineStore('estateStore', {
  state: () => {
    return {
      regions: [],
      agents: [],
      region_id: '',
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
