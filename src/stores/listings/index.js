import { defineStore } from 'pinia'
import actions from './actions'
export const useListingStore = defineStore('listingStore', {
  state: () => {
    return {
      loading: true,
      filteredListing: [],
      singleListing: [],
      listings: [],
      filter: {
        region: false,
        price: false,
        area: false,
        bedrooms: false
      }
    }
  },
  actions,
  getters: {
    splitDate() {
      let date = this.singleListing?.created_at.split('T')[0].replace(/-/g, '/')
      let [year, month, day] = date.split('/')
      let formattedDate = `${day}/${month}/${year}`
      return formattedDate
    }
  }
})
