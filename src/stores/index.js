import { defineStore } from 'pinia'
import actions from './actions'

export const useEstateStore = defineStore('estateStore', {
  state: () => {
    return {
      regions: []
    }
  },
  actions
})
