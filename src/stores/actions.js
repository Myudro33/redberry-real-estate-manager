import axios from 'axios'
export default {
  filterBy(state) {
    for (const key in this.filter) {
      if (key === state) {
        this.filter[key] = !this.filter[key]
      } else {
        this.filter[key] = key === state
      }
    }
  },
  async getRegions() {
    const response = await axios.get(
      'https://api.real-estate-manager.redberryinternship.ge/api/regions'
    )
    this.regions = response.data
  }
}
