import { defineStore } from 'pinia'
import actions from './actions'
export const useModalStore = defineStore('modalStore', {
  state: () => {
    return {
      modal: false
    }
  },
  actions
})
