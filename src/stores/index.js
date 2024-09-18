import { defineStore } from 'pinia'
import actions from './actions'

export const useEstateStore = defineStore('estateStore', {
  state: () => {
    return {
      regions: [],
      agents: [],
      region_id: JSON.parse(localStorage.getItem('region')) || '',
      cities: []
    }
  },
  actions
})
